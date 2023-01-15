import json
from collections import defaultdict
from FoodDetector import FoodDetector


class Class2cals:
    def __init__(self, data: json) -> None:
        self.nutrition = defaultdict(int)
        
        with open(data, 'r') as f:
            self.data = json.load(f)
        
    def __call__(self, meal: list) -> dict:
        for food in meal:
            element = self.data['foods'][food] 

            for nutrient, val in element.items():
                self.nutrition[nutrient] += val
        
        return self.nutrition


# cals = Class2cals('nutrition_info.json')
# detector = FoodDetector()
# res = cals(['Cookie', 'Cookie', 'Pizza'])
# print(res)

        

