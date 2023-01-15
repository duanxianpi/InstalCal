import torch as th
import cv2 as cv
import os
import pandas as pd

class FoodDetector:
    """
    Class implements yolov5 to detect food
    """
    def __init__(self) -> None:
        
        self.meal = []

        self.model = th.hub.load(
            'ultralytics/yolov5', 
            'yolov5s', 
            pretrained=True,
            verbose=False)

        self.classes = self.model.names
        self.device = 'cuda' if th.cuda.is_available() else 'cpu'
        print(f'Using: {self.device}')

    def label_to_class(self, label):
        return self.classes[int(label)]
    
    def __call__(self, input_image) -> any:
        img_bgr = cv.imread(input_image)
        img_rgb = cv.cvtColor(img_bgr, cv.COLOR_BGR2RGB)
        results = self.model(img_rgb)
        results.show()

        df = results.pd().xyxy[0]
    
        for food in df['name']:
            self.meal.append(food)

        print(self.meal)

detector = FoodDetector()
detector("image.png")
