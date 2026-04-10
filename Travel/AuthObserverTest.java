package Travel;

public class AuthObserverTest {
    public static void main(String[] args) {
        AuthAccommodation.AuthService authService = new AuthAccommodation.AuthService();

        authService.addObserver(new SessionObserver());
        authService.addObserver(new AuditObserver());
        authService.addObserver(new NotificationObserver());

        AuthAccommodation.UserAccount user =
                authService.signUp("wonyoung@example.com", "Password1", "Wonyoung");

        AuthAccommodation.UserSession session =
                authService.login("wonyoung@example.com", "Password1");

        authService.logout(session.sessionId);
    }
}