package Travel;

public class SessionObserver implements AuthObserver {
    @Override
    public void update(String eventType, AuthAccommodation.UserAccount user) {
        System.out.println("[SessionObserver] Event: " + eventType +
                " for user: " + user.email);
    }
}