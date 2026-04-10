package Travel;

public class NotificationObserver implements AuthObserver {
    @Override
    public void update(String eventType, AuthAccommodation.UserAccount user) {
        System.out.println("[NotificationObserver] Notification triggered for " +
                eventType + " event of user: " + user.email);
    }
}