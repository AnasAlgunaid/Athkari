import requests
import json


base_url = """https://www.hisnmuslim.com/api/ar/{id}.json"""

for i in range(1, 133):
    current_url = base_url.format(id=i)
    response = requests.get(current_url)
    print(current_url, response.status_code)
    if response.status_code == 200:
        # Manually decode the response content with UTF-8 encoding
        response_text = response.content.decode("utf-8-sig")

        # Parse JSON response
        data = json.loads(response_text)

        filename = f"src/data/athkars/{i}.json"  # Filename with current ID
        with open(filename, "w") as file:
            json.dump(data, file, indent=4)
        print(f"Data for ID {i} has been written to {filename}")
