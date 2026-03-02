package Travel.Itinerary;

public class ItineraryService {
    Itinerary getItinerary(String userID) {
        //retrieves the current itinerary for a user
    }

    void removeItem(String userId, String itineraryItemId) {
        //removes an item from the itinerary
    }

    void updateSchedule(String userId, String itineraryItemId, LocalDateTime newTime) {
        //updates the schedule of an itinerary item
    }
}