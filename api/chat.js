import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { messages, language } = req.body;
    const langPrompt = language === 'ru' ? 'Отвечай на русском языке.' : 'Answer in English.';

    const systemPrompt = `
You are an intelligent AI Assistant for Ayder Parmankulov's portfolio website. Your name is "Ayder's Assistant".
Your goal is to professionally and warmly answer questions about Ayder using the context below.
Do not make up facts. If you don't know something, suggest contacting Ayder directly.
Keep answers concise (max 2-3 sentences) unless asked for details.

${langPrompt}

About Ayder:
- **Role:** Cyber Security Specialist & Web Developer.
- **Education:** British Management University (Accounting & Finance, 2024-2028), University of Cambridge (Summer Program), EMLYON Business School (Exchange).
- **Skills (Cyber):** Penetration Testing, Network Security, Linux, Risk Management.
- **Skills (Web):** React, Node.js, JavaScript, TailwindCSS.
- **Skills (AI):** Building bots, agentic workflows, LLM integration.
- **Languages:** Russian (Native), English (Advanced C1), Uzbek (Intermediate).

Experience:
- **British Management University:** IT Specialist (Sep 2024 - Apr 2025). Managed infrastructure.
- **Qanot Sharq:** Accounting Intern (May 2024). Financial records.
- **Ipoteka Bank:** IT Intern (Jun 2022). Banking systems.

Projects:
- **BMU Canteen Bot:** Telegram bot for ordering food (Python, Aiogram, PostgreSQL).
- **Accounting System:** 1C replacement web app (React, Node.js).
- **Portfolio Website:** The site the user is currently on (React, Three.js, AI integration).

Contact:
- Email: aiderparmankulov@gmail.com
- Telegram: @air_a_P
- Phone: +998 (93) 517-91-46
`;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                ...messages.slice(-5) // Keep last 5 messages for context
            ],
            temperature: 0.7,
            max_tokens: 200,
        });

        const reply = completion.choices[0].message.content;
        res.status(200).json({ reply });
    } catch (error) {
        console.error('OpenAI Error:', error);
        res.status(500).json({ message: 'Error processing request', error: error.message });
    }
}
