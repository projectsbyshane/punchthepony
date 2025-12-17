import requests

# The Lichess URL for your account
url = "https://lichess.org/api/user/barry"

try:
    response = requests.get(url)
    data = response.json()

    # Digging into the data safely
    # This matches the 'perfs' -> 'blitz' -> 'rating' structure
    blitz = data.get('perfs', {}).get('blitz', {}).get('rating', 'Not Found')
    rapid = data.get('perfs', {}).get('rapid', {}).get('rating', 'Not Found')

    print(f"Blitz Rating: {blitz}")
    print(f"Rapid Rating: {rapid}")

except Exception as e:
    print(f"Script failed with error: {e}")
    # This prints the raw data so we can diagnose it if it fails again
    print("Raw Data Received:")
    print(response.text)