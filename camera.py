import cv2
from cvzone.HandTrackingModule import HandDetector


cap = cv2.VideoCapture(0)  # Create a VideoCapture
detector = HandDetector(maxHands=1)
while True:
    success, img = cap.read()
    hands, img = detector.findHands(img)
    cv2.imshow("Imgae", img)
    cv2.waitKey(1)
