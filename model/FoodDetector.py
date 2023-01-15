import torch as th
import cv2 as cv
import os
# import pandas as pd

class FoodDetector:
    """
    Class implements yolov5 to detect food
    """
    def __init__(self, model_name: str) -> None:
        
        self.meal = []
        self.model = self.load_model(model_name)
        self.classes = self.model.names
        self.device = 'cuda' if th.cuda.is_available() else 'cpu'
        print(f'Using: {self.device}')
    
    def load_model(self, model_name: str) -> any:
        model = th.hub.load('ultralytics/yolov5', 'custom', path=model_name, force_reload=True)
        return model

    def label_to_class(self, label):
        return self.classes[int(label)]
    
    def __call__(self, folder, input_image) -> any:
        img_bgr = cv.imread((os.path.join(folder, input_image)))
        img_rgb = cv.cvtColor(img_bgr, cv.COLOR_BGR2RGB)
        results = self.model(img_rgb)
        results.show()

        # label = results.xyxyn[0][:, -1]
        # prediction = self.label_to_class(label)
        # animal = self.isAnimal(label)

        # return (prediction, animal)

detector = FoodDetector(model_name='best.pt')
# detector(folder=, input_image=)

