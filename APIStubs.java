// here we can begin to stub out the API calls that we will be making to the backend

//Wonyoung


//Seni

//Daniela

//Chris
public class APIStubs {
    public static void main(String[] args) {
        // Example of a stubbed API call
        String response = getUserData("12345");
        System.out.println(response);
    }

    // Stubbed method to simulate an API call to get user data
    public static String getUserData(String userId) {
        // In a real implementation, this would make an HTTP request to the backend
        // For now, we will return a hardcoded response
        return "User data for user ID: " + userId;
    }
}


