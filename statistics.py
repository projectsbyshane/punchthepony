import requests

url = "https://lichess.org/api/user/punchthepony"
headers = {
    "Accept": "application/json",
    "User-Agent": "MyWeeklyStatsScript/1.0 (Contact: your-email@example.com)"
}

response = requests.get(url, headers=headers)
data = response.json()

blitz_rating = data['perfs']['blitz']['rating']
rapid_rating = data['perfs']['rapid']['rating']

print(blitz_rating)
print(rapid_rating)