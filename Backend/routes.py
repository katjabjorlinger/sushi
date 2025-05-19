from flask import Blueprint, request, jsonify
from supabase_client import supabase

routes = Blueprint('routes', __name__)

@routes.route('/api/book', methods=['POST'])
def create_booking(): 
    data = request.get_json()
    print("Inkommande bokning:", data)  

    try: 
        insert_data = {
            "name": data["name"],
            "email": data["email"],
            "guests": data["guests"],
            "time_id": data["time_id"]
        }  
        result = supabase.table("bookings").insert(insert_data).execute()
        print("Supabase-resultat:", result)

        update_result = supabase.table("available_times")\
            .update({"available": False}) \
            .eq("time_id", data["time_id"]) \
            .execute()
        print("Tillgänglighet uppdaterad:", update_result)

        return jsonify({"message": "Booking created"}), 200
    
    except Exception as e: 
       print("Supabase-fel:", e)
       return jsonify({"error": str(e)}), 400                 
    
@routes.route('/api/available', methods=['GET'])
def get_available():
    date = request.args.get("date")
    guests = request.args.get("guests")

    if not date or not guests: 
        return jsonify({"error": "Missing date our guests parameter"}), 400
    
    try:
        guests = int(guests)
        results = supabase.table("available_times") \
             .select("*") \
             .eq("date", date) \
             .eq("available", True) \
             .gte("max_guests", guests) \
             .execute()
        
        return jsonify(results.data), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
@routes.route('/api/menu', methods=['GET'])
def get_menu():
    response = supabase.table('menu').select('*').execute()
    return jsonify(response.data)