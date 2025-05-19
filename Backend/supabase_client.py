
from supabase import create_client
import os 
from dotenv import load_dotenv

load_dotenv()


url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

if not url or not key:
    raise ValueError("Supabase URL eller API-nyckel saknas.")

try: 
    supabase = create_client(url, key)
    print("Supabase-klient skapad.")
except Exception as e: 
    print ("Fel vid skapande av Supabase-klient:", str(e))
    supabase = None



