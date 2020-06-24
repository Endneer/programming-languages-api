import { ProgrammingLanguage } from "./programming-language.model";

test('like increases likes by 1', () => {
    // Arrange
    const programmingLanguage = new ProgrammingLanguage('language', 'categoray');
    const likes = programmingLanguage.likes;

    // Act
    programmingLanguage.like();

    // Assert
    expect(programmingLanguage.likes).toBe(likes + 1);
});

test('dislike decreases likes by 1', () => {
    // Arrange
    const programmingLanguage = new ProgrammingLanguage('language', 'categoray');
    const likes = programmingLanguage.likes;

    // Act
    programmingLanguage.dislike();

    // Assert
    expect(programmingLanguage.likes).toBe(likes - 1);
});