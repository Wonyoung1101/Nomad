package Travel.Reviews;

public class ModerationService {
    public ModerationResult checkLanguage(String text){
        //verify language as inappropriate or not

        if (text.contains("inappropriate")){
            return new ModerationResult(false, "Inappropriate language detected.");
        }
        return new ModerationResult(true, "Content approved");
    }

    public boolean isSpam(ReviewForm form){
        //identify spam or bot-generated reviews

        return form.getReviewText().length() < 5;
    }
}
