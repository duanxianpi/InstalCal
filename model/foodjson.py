import json

def create_nutrition_json(food_list):
    nutrition_info = {'foods': {}}
    for food in food_list:
        food_info = {
            'calories': food['calories'],
            'carbs': food['carbs'],
            'fat': food['fat'],
            'protein': food['protein']
        }
        nutrition_info['foods'][food['name']] = food_info

    return nutrition_info

food_list = [
    {"name": "Pizza", "calories": 237, "carbs": 26.08, "fat": 10.1, "protein": 10.6},
    {"name": "Cookie", "calories": 49, "carbs": 6.41, "fat": 2.47, "protein": 0.55},
    {"name": "Rice", "calories": 204, "carbs": 44.08, "fat": 0.44, "protein": 4.2},
    {"name": "Kebab", "calories": 360, "carbs": 31, "fat": 21, "protein": 27},
    {"name": "General Tso's Chicken", "calories": 204, "carbs": 44.08, "fat": 0.44, "protein": 14},
    {"name": "Croissant", "calories": 231, "carbs": 26.11, "fat": 11.97, "protein": 4.67}
]
nutr_json = create_nutrition_json(food_list)

with open("nutrition_info.json", "w") as f:
    json.dump(nutr_json, f, indent=2)