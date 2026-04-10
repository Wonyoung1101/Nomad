package Travel;

public class AuditObserver implements AuthObserver {
    @Override
    public void update(String eventType, AuthAccommodation.UserAccount user) {
        System.out.println("[AuditObserver] Audit log recorded for " +
                eventType + " by user: " + user.email);
    }
}