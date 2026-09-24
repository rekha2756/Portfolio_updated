import cv2
import os

VIDEO_PATH = "public/character.mp4"
OUTPUT_DIR = "public/frames"

TOTAL_FRAMES = 64

os.makedirs(OUTPUT_DIR, exist_ok=True)

cap = cv2.VideoCapture(VIDEO_PATH)

if not cap.isOpened():
    print("Could not open video.")
    exit()

total_video_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)

print("Total video frames:", total_video_frames)
print("FPS:", fps)

if total_video_frames == 0:
    print("Video contains no frames.")
    cap.release()
    exit()

# Select 64 frames evenly across the video
frame_indexes = [
    int(i * (total_video_frames - 1) / (TOTAL_FRAMES - 1))
    for i in range(TOTAL_FRAMES)
]

for i, frame_index in enumerate(frame_indexes):
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_index)

    success, frame = cap.read()

    if not success:
        print("Could not read frame:", frame_index)
        continue

    output_path = os.path.join(
        OUTPUT_DIR,
        f"frame-{i:02d}.webp"
    )

    cv2.imwrite(
        output_path,
        frame,
        [cv2.IMWRITE_WEBP_QUALITY, 95]
    )

    print(f"Created {output_path}")

# Use the first frame as the center frame
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

success, center_frame = cap.read()

if success:
    center_path = os.path.join(
        OUTPUT_DIR,
        "center.webp"
    )

    cv2.imwrite(
        center_path,
        center_frame,
        [cv2.IMWRITE_WEBP_QUALITY, 95]
    )

    print("Created center.webp")

cap.release()

print("\nDone!")