export class ProgrammingLanguage {
    name: string;
    category: string;
    likes = 0;
    details = '';

    constructor(name: string, category: string, details?: string) {
        this.name = name;
        this.category = category;
        this.details = details || this.details;
    }

    like() {
        this.likes++;
    }

    dislike() {
        this.likes--;
    }
}