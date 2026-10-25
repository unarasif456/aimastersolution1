/** Static content for tools, prompts, tutorials and blog. Edit here to add more. */

export const toolCategories = ["Writing", "Image", "Video", "Coding", "Business", "Education"] as const;
export type ToolCategory = (typeof toolCategories)[number];

export type Tool = { name: string; category: ToolCategory; desc: string; descUr: string; url: string; free: boolean };

export const tools: Tool[] = [
  { name: "ChatGPT", category: "Writing", desc: "All-round AI assistant for writing, ideas and answers.", descUr: "Likhne, ideas aur sawalon ke jawab ke liye har-fun-maula AI.", url: "https://chat.openai.com", free: true },
  { name: "Claude", category: "Writing", desc: "Thoughtful long-form writing and document analysis.", descUr: "Lambi tahreer aur documents samajhne ke liye behtareen.", url: "https://claude.ai", free: true },
  { name: "Grammarly", category: "Writing", desc: "Grammar, tone and clarity fixes as you type.", descUr: "Grammar aur tone ko foran theek karta hai.", url: "https://grammarly.com", free: true },
  { name: "Midjourney", category: "Image", desc: "Stunning artistic images from text prompts.", descUr: "Text se khoobsurat artistic tasveerein.", url: "https://midjourney.com", free: false },
  { name: "Canva AI", category: "Image", desc: "Design posts, logos and slides with AI help.", descUr: "AI ki madad se posts, logo aur slides design karein.", url: "https://canva.com", free: true },
  { name: "Leonardo AI", category: "Image", desc: "Game assets, product shots and concept art.", descUr: "Product photos aur concept art banayein.", url: "https://leonardo.ai", free: true },
  { name: "Runway", category: "Video", desc: "Generate and edit video with text prompts.", descUr: "Text se video banayein aur edit karein.", url: "https://runwayml.com", free: true },
  { name: "CapCut", category: "Video", desc: "Auto captions, effects and quick reels.", descUr: "Auto captions aur jaldi reels banane ke liye.", url: "https://capcut.com", free: true },
  { name: "HeyGen", category: "Video", desc: "AI avatar videos that speak your script.", descUr: "AI avatar jo aap ka script bolta hai.", url: "https://heygen.com", free: false },
  { name: "GitHub Copilot", category: "Coding", desc: "AI pair-programmer inside your editor.", descUr: "Editor ke andar AI coding saathi.", url: "https://github.com/features/copilot", free: false },
  { name: "Lovable", category: "Coding", desc: "Build full web apps by chatting with AI.", descUr: "AI se baat kar ke poori website banayein.", url: "https://lovable.dev", free: true },
  { name: "Cursor", category: "Coding", desc: "AI-first code editor for faster development.", descUr: "AI wala code editor, tez development ke liye.", url: "https://cursor.com", free: true },
  { name: "Notion AI", category: "Business", desc: "Notes, docs and summaries in one workspace.", descUr: "Notes, docs aur summaries ek jagah.", url: "https://notion.so", free: false },
  { name: "Gamma", category: "Business", desc: "Presentations and pitch decks in minutes.", descUr: "Minton mein presentations tayyar.", url: "https://gamma.app", free: true },
  { name: "Zapier AI", category: "Business", desc: "Automate repetitive tasks between apps.", descUr: "Apps ke darmiyan bar bar wale kaam automate karein.", url: "https://zapier.com", free: true },
  { name: "Khanmigo", category: "Education", desc: "AI tutor that guides students step by step.", descUr: "AI ustaad jo qadam ba qadam samjhata hai.", url: "https://khanmigo.ai", free: false },
  { name: "Perplexity", category: "Education", desc: "Research answers with cited sources.", descUr: "Hawalon ke saath research ke jawab.", url: "https://perplexity.ai", free: true },
  { name: "Quizlet", category: "Education", desc: "AI flashcards and practice tests.", descUr: "AI flashcards aur practice tests.", url: "https://quizlet.com", free: true },
];

export type Prompt = { title: string; category: string; text: string };

export const prompts: Prompt[] = [
  { title: "Blog post outline", category: "Writing", text: "Act as an expert content writer. Create a detailed blog outline on [TOPIC] for [AUDIENCE], with an engaging title, 5 H2 sections, key points under each, and a short conclusion." },
  { title: "Professional email", category: "Writing", text: "Write a polite, professional email to [PERSON] about [SUBJECT]. Keep it under 120 words, clear call to action at the end." },
  { title: "Business idea validator", category: "Business", text: "I want to start [BUSINESS IDEA] in [CITY/COUNTRY]. List target customers, top 3 competitors, pricing ideas, risks, and a 30-day launch plan." },
  { title: "Social media calendar", category: "Business", text: "Create a 7-day Instagram content calendar for a [BUSINESS TYPE]. Include post idea, caption, 5 hashtags and best posting time for each day." },
  { title: "Explain like I'm 10", category: "Study", text: "Explain [CONCEPT] as if I am 10 years old. Use a simple real-life example, then give me 3 quiz questions to check my understanding." },
  { title: "Exam study plan", category: "Study", text: "Make a 14-day study plan for my [SUBJECT] exam. I can study [X] hours daily. Include daily topics, revision days and practice tests." },
  { title: "Debug my code", category: "Coding", text: "Here is my [LANGUAGE] code and the error message. Explain what is wrong in simple words, then give the fixed code with comments:\n\n[PASTE CODE]" },
  { title: "Write a function", category: "Coding", text: "Write a clean, commented [LANGUAGE] function that [WHAT IT SHOULD DO]. Include input validation and 3 example usages." },
  { title: "Logo concept", category: "Design", text: "Minimal modern logo for a brand called [NAME], [INDUSTRY], flat vector, [COLOR] palette, white background, simple geometric icon." },
  { title: "Product photo", category: "Design", text: "Professional studio product photo of [PRODUCT], soft lighting, clean pastel background, high detail, 4k, e-commerce style." },
];

export type Tutorial = { title: string; titleUr: string; level: string; steps: { en: string; ur: string }[] };

export const tutorials: Tutorial[] = [
  {
    title: "Your first conversation with ChatGPT",
    titleUr: "ChatGPT se pehli baat cheet",
    level: "Beginner",
    steps: [
      { en: "Open chat.openai.com and create a free account.", ur: "chat.openai.com kholein aur free account banayein." },
      { en: "Type a clear question — say who you are and what you need.", ur: "Saaf sawal likhein — batayein aap kaun hain aur kya chahiye." },
      { en: "Read the answer, then ask follow-ups to improve it.", ur: "Jawab parhein, phir behtar karne ke liye mazeed sawal poochein." },
      { en: "Save useful prompts in our Prompt Library for later.", ur: "Kaam ke prompts hamari Prompt Library se save karein." },
    ],
  },
  {
    title: "The R-T-F prompt formula",
    titleUr: "R-T-F prompt formula",
    level: "Beginner",
    steps: [
      { en: "Role: tell the AI who to act as (e.g. 'Act as a teacher').", ur: "Role: AI ko batayein woh kaun bane (jaise 'Act as a teacher')." },
      { en: "Task: describe exactly what you want done.", ur: "Task: bilkul saaf batayein kya kaam karna hai." },
      { en: "Format: say how you want the answer — list, table, 100 words.", ur: "Format: batayein jawab kaisa ho — list, table, 100 words." },
      { en: "Example: 'Act as a chef. Suggest 3 dinners. Give a table.'", ur: "Misaal: 'Act as a chef. 3 dinners batao. Table mein do.'" },
    ],
  },
  {
    title: "Make images with AI",
    titleUr: "AI se tasveerein banayein",
    level: "Intermediate",
    steps: [
      { en: "Pick a tool like Canva AI or Leonardo (free plans available).", ur: "Canva AI ya Leonardo jaisa tool chunein (free plans maujood)." },
      { en: "Describe subject, style, lighting and colors.", ur: "Subject, style, roshni aur rang batayein." },
      { en: "Generate 4 versions and pick the best.", ur: "4 versions banayein aur behtareen chunein." },
      { en: "Refine with small changes instead of rewriting everything.", ur: "Sab dobara likhne ki bajaye chhoti tabdeeli karein." },
    ],
  },
];

export type Post = { slug: string; title: string; titleUr: string; excerpt: string; excerptUr: string; date: string; tag: string };

export const posts: Post[] = [
  { slug: "ai-tools-2026", title: "10 AI tools every student needs in 2026", titleUr: "2026 mein har student ke liye 10 AI tools", excerpt: "From note-taking to exam prep, these free tools save hours every week.", excerptUr: "Notes se exam ki tayyari tak, yeh free tools har hafte ghante bachate hain.", date: "Oct 20, 2026", tag: "Tips" },
  { slug: "earn-with-ai", title: "How freelancers are earning more with AI", titleUr: "Freelancers AI se zyada kaise kama rahe hain", excerpt: "Real workflows for writing, design and video gigs on Fiverr and Upwork.", excerptUr: "Fiverr aur Upwork par writing, design aur video ke asal tareeqe.", date: "Oct 12, 2026", tag: "Business" },
  { slug: "prompt-mistakes", title: "5 prompt mistakes beginners make", titleUr: "Beginners ki 5 aam prompt ghaltiyan", excerpt: "Vague questions get vague answers. Here's how to fix that fast.", excerptUr: "Mubham sawal ka mubham jawab. Isay jaldi theek karne ka tareeqa.", date: "Oct 3, 2026", tag: "Learn" },
  { slug: "ai-news-october", title: "AI news roundup: October 2026", titleUr: "AI khabrein: October 2026", excerpt: "The biggest model releases and what they mean for everyday users.", excerptUr: "Bade naye models aur aam users ke liye un ka matlab.", date: "Oct 1, 2026", tag: "News" },
];
