import express from 'express';
import { ProgrammingLanguage } from '../models/programming-language.model';

const router = express.Router();

const programmingLanguages = [
    new ProgrammingLanguage('perl', 'imperative', 'Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.'),
    new ProgrammingLanguage('c', 'imperative', 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.'),
    new ProgrammingLanguage('java', 'imperative', 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.'),
    new ProgrammingLanguage('ruby', 'imperative', 'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'),
    new ProgrammingLanguage('php', 'imperative', 'PHP is a popular general-purpose scripting language that is especially suited to web development.'),
    new ProgrammingLanguage('c#', 'imperative', 'C# is a general-purpose, multi-paradigm programming language'),
    new ProgrammingLanguage('c++', 'imperative', 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language'),
    new ProgrammingLanguage('swift', 'imperative', 'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond.'),
    new ProgrammingLanguage('javascript', 'imperative', 'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.'),
    new ProgrammingLanguage('html', 'declarative', 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.'),
    new ProgrammingLanguage('sql', 'declarative', 'SQL is a standard language for accessing and manipulating databases.'),
    new ProgrammingLanguage('prolog', 'declarative', 'Unlike many other programming languages, Prolog is intended primarily as a declarative programming language.'),
] as ProgrammingLanguage[];

router.get('/', (_, res) => {
    res.status(200).json(programmingLanguages);
});

router.get('/category/:categoryName', (req, res) => {
    const categoryName = req.params.categoryName;
    res.status(200).json(programmingLanguages.filter(l => l.category === categoryName));
});

router.get('/categories-count', (req, res) => {
    res.status(200).send((new Set(programmingLanguages.map(l => l.category)).size));
});

router.get('/details/:languageName', (req, res) => {
    const languageName = req.params.languageName;
    res.status(200).json(programmingLanguages.find(l => l.name === languageName)?.details);
});

router.post('/like', (req, res) => {
    programmingLanguages.filter(l => l.name === req.body.name).forEach(l => l.like());
    res.sendStatus(204);
});

router.post('/dislike', (req, res) => {
    programmingLanguages.filter(l => l.name === req.body.name).forEach(l => l.dislike());
    res.sendStatus(204);
});

export default router;