export interface Publication {
  slug: string;
  title: string;
  shortDescription: string;
  content: string[];
  image: string;
  additionalImages?: string[];
  type: 'article' | 'book';
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export const publications: Publication[] = [
  {
    slug: "self-as-witness",
    title: "THE SELF AS WITNESS",
    shortDescription: "Exploring how the self becomes both subject and suspect in its own gaze. A profound dive into internal discipline and self-mastery.",
    image: "/images/book-self-as-witness-new.png",
    type: "book",
    category: "Philosophy",
    date: "May 2026",
    author: "Twelve Lords Editorial",
    readTime: "240 pages",
    content: [
      "In the silent chambers of the modern mind, a new form of surveillance has taken root—not from external cameras or digital algorithms, but from the self's own observation of itself.",
      "The Self as Witness explores the dual nature of consciousness in the digital age. It examines how we have become both the prisoner and the guard, the suspect and the witness, in a trial that never ends.",
      "Through a synthesis of ancient stoicism and modern psychological theory, this work provides a framework for reclaiming internal discipline. It argues that true mastery is not found in controlling the external world, but in refining the quality of the internal gaze.",
      "As we navigate an era of unprecedented visibility, understanding the mechanics of self-mastery becomes not just a philosophical pursuit, but a survival necessity."
    ]
  },
  {
    slug: "human-awareness-weakness",
    title: "HUMAN AWARENESS IS THE WEAKNESS",
    shortDescription: "In a world engineered for digital convenience, the failure to build widespread cyber awareness is leaving individuals dangerously exposed.",
    image: "/images/article-human-awareness.png",
    type: "article",
    category: "Cybersecurity",
    date: "Apr 20, 2026",
    author: "Muhammad Raza",
    readTime: "8 min",
    content: [
      "In the race to digitise modern life, convenience has become the defining principle. From children navigating smartphones before they can write, to transport networks and public infrastructure running on interconnected systems, technology is no longer simply a tool—it is the environment in which we live.",
      "Recent figures from the National Cyber Security Centre illustrate the scale of the challenge. In 2025, the UK experienced 204 nationally significant cyber attacks—more than double the 89 recorded the previous year. Government data further indicates that nearly 43% of businesses identified breaches or attacks.",
      "Despite continuous investment in advanced security technologies, human behaviour remains central to the majority of cyber incidents. Research suggests that up to 88% of breaches involve some form of human error. This is not simply carelessness; it reflects a broader culture of passive interaction with technology.",
      "Social engineering has become the dominant method of attack. Rather than attempting to break through hardened systems, attackers target individuals directly—exploiting trust, urgency, and routine behaviour. Phishing alone accounts for approximately 93% of UK cyber crimes.",
      "Technology itself must play a role. Security features need to move beyond optional prompts and become embedded, intuitive, and resistant to misuse. At the same time, awareness efforts must evolve from passive training into practical education that reflects how attacks actually occur."
    ]
  },
  {
    slug: "generation-under-fear",
    title: "A GENERATION UNDER FEAR",
    shortDescription: "How Corporal Punishment is quietly damaging Pakistan's youth and the long-term psychological cost to the nation.",
    image: "/images/article-corporal-punishment.png",
    type: "article",
    category: "Education",
    date: "Apr 18, 2026",
    author: "Twelve Lords Analysis",
    readTime: "12 min",
    content: [
      "Every generation is told it is the future of the nation. In Pakistan, that idea is repeated often—by policymakers, by educators, and by parents. But what happens when that future is shaped not by curiosity and confidence, but by fear?",
      "Across many schools and madrassas in Pakistan, corporal punishment remains an embedded part of discipline. For countless children, the school day does not begin with learning, but with anxiety: the anticipation of humiliation, the threat of violence, and the quiet erosion of self-worth. Education, which should nurture potential, instead becomes a source of psychological strain.",
      "The scale of the issue is significant. A 2018 peer-reviewed study found that more than 90% of boys and over 60% of girls experienced corporal punishment within a four-week period in school. More recent research from 2023 in Khyber Pakhtunkhwa reported that approximately 83% of students in schools and madrassas had been subjected to physical punishment. These are not isolated figures—they reflect a broader system in which physical discipline is normalised rather than questioned.",
      "For many teachers, this reality is not always rooted in cruelty, but in pressure. Overcrowded classrooms, rigid academic expectations, and a lack of training in behavioural management often leave educators with few tools. In such environments, physical punishment becomes a shortcut—an immediate way to assert control. Yet what appears effective in the moment can have long-term consequences that extend far beyond the classroom.",
      "Research on childhood trauma offers a stark warning. Studies from institutions such as the Centers for Disease Control and Prevention and the World Health Organization show that adverse childhood experiences—including physical abuse, humiliation, and chronic fear—are strongly associated with mental health problems later in life. These include anxiety, depression, substance misuse, and even suicidal behaviour. More importantly, such experiences can alter how a child understands themselves and the world.",
      "A child repeatedly exposed to punishment and humiliation may begin to internalise damaging beliefs: that they are inadequate, that mistakes deserve pain, or that authority must be feared rather than respected. Over time, this can disrupt personality development itself. Emotional regulation becomes harder, self-esteem weakens, and relationships—both in childhood and adulthood—can be shaped by insecurity or distrust.",
      "Neuroscience reinforces this concern. Research highlighted by the Harvard Center on the Developing Child explains how prolonged exposure to stress in childhood—often referred to as “toxic stress”—can affect brain development, particularly in areas related to learning, memory, and emotional control. In simple terms, a child who learns in fear is not just emotionally affected; their ability to think, focus, and create may also be compromised.",
      "This raises a difficult question: how can a child be expected to learn effectively in an environment where they feel unsafe?",
      "In Pakistan, this contradiction is particularly striking. Students who struggle academically often face harsher punishment rather than additional support. Instead of receiving guidance, they are made to feel inadequate—reinforcing a cycle where fear replaces motivation. Creativity, critical thinking, and innovation—qualities essential for national development—are unlikely to thrive under such conditions.",
      "The legal landscape, while evolving, has yet to fully address this reality. Laws such as the Islamabad Capital Territory Prohibition of Corporal Punishment Act 2021 and provincial measures in Sindh represent important progress. They signal a growing recognition that physical punishment has no place in education. However, enforcement remains uneven, and in many parts of the country, such practices continue with little oversight.",
      "Cultural attitudes also play a role. Many parents, even when aware of these practices, accept them as necessary. The belief that “this is how children learn” remains deeply ingrained. In doing so, discipline is prioritised over dignity, and obedience over well-being.",
      "The consequences, however, are far from abstract. Pakistan continues to face significant challenges in innovation, entrepreneurship, and youth retention. While these issues have multiple causes, the psychological environment in which children are raised and educated cannot be ignored. A generation shaped by fear, anxiety, and diminished self-worth is less likely to take risks, think independently, or challenge ideas—all essential traits for progress.",
      "If Pakistan is serious about investing in its future, the conversation around education must go beyond access and curriculum. It must include the psychological safety of students. Stronger enforcement of existing laws, better teacher training in non-violent discipline, and a shift in societal attitudes are not optional—they are necessary."
    ]
  },
  {
    slug: "9am-exams-failing",
    title: "9AM EXAMS ARE FAILING STUDENTS",
    shortDescription: "The science of circadian rhythms proves that early morning testing is a biological bias, not a measure of ability.",
    image: "/images/article-9am-exams-modern.png",
    additionalImages: [
      "/images/article-9am-exams-ancient.png"
    ],
    type: "article",
    category: "Science",
    date: "Apr 15, 2026",
    author: "Research Editorial",
    readTime: "10 min",
    content: [
      "At 9:00 a.m. sharp, millions of students sit in a heavy, collective silence, staring at exam papers that will shape the trajectory of their adult lives. We are told this system represents fairness at its highest level—a standardised, meritocratic “level playing field” where effort and ability determine outcomes.",
      "But the science tells a very different story.",
      "Human performance is governed by circadian rhythms—the internal biological clocks that regulate sleep, alertness and cognitive efficiency. These rhythms are not identical across individuals. Some people naturally reach peak performance early in the day. Many others do not. For them, a 9:00 a.m. exam is not simply an inconvenience; it is a physiological barrier.",
      "A landmark study of more than 700 students in the Netherlands illustrates the consequences of this mismatch. Researchers found that “night owls” performed significantly worse in 9:00 a.m. exams than their “morning-type” peers. Crucially, by early afternoon, this performance gap vanished entirely. Nothing about the students’ knowledge had changed. Nothing about their preparation had improved. Only the time of day had shifted.",
      "For teenagers, this misalignment is even more pronounced. During puberty, the body’s internal clock shifts forward, making it a biological necessity—not a behavioural choice—to fall asleep later and wake up later. This shift is well-documented across sleep science and has been observed consistently across cultures.",
      "Sleep researcher Mary Carskadon has described the impact in stark terms: asking a teenager to perform at high capacity at 8:00 or 9:00 a.m. is equivalent to asking an adult to function at around 4:00 a.m.",
      "It is a striking comparison—and an uncomfortable one. Few would consider it reasonable to ask a professional to deliver a life-defining performance in the middle of the night. Yet this is precisely what the education system demands of millions of students every year. When those students inevitably fall short of their peak performance, the system interprets it as a lack of ability rather than a predictable consequence of biological misalignment.",
      "Modern school timetables are, in many ways, a legacy of the Industrial Revolution. As mass education systems developed in the 19th century, they were designed to mirror the structure of factory life—characterised by fixed hours, rigid discipline and synchronised routines. Schools adopted these structures, not because they optimised learning, but because they aligned with the logistical demands of the time.",
      "When school schedules are aligned more closely with human biology, the results are difficult to ignore. In a study conducted in England, where start times were shifted to 10:00 a.m., researchers observed a significant reduction in illness-related absences alongside a measurable improvement in academic performance.",
      "At this point, continuing to schedule high-stakes exams at 9:00 a.m. is no longer a neutral administrative choice. It is an active decision to prioritise convenience over accuracy, and tradition over evidence.",
      "Students are tested at a time when many of them are not fully capable of demonstrating their abilities. Their results are then treated as objective measures of merit, shaping opportunities, pathways and, in some cases, entire careers.",
      "The solution does not require sweeping reform or technological innovation. It is, in principle, remarkably simple: schedule exams at a time when students are actually awake."
    ]
  },
  {
    slug: "subtle-art-not-giving-a-fuck",
    title: "THE SUBTLE ART OF NOT GIVING A F*CK",
    shortDescription: "The mega bestseller. The self-help book for people who hate self-help books. A radical departure from anything else you've ever read.",
    image: "/images/book-subtle-art.png",
    type: "book",
    category: "Philosophy",
    date: "Updated 2026",
    author: "Mark Manson",
    readTime: "224 pages",
    content: [
      "Banned by Dictators, Exalted by the Free World. The Subtle Art of Not Giving a F*ck took the world by storm, selling almost 2 million copies in its first year alone. It was #1 on the New York Times Bestseller list and is still in the Top Ten six years after being published.",
      "The Subtle Art presents an entirely new approach to personal development, from top to bottom. Life is not about getting rid of problems, it’s about finding better problems. It’s not about avoiding failure, it’s about getting better at failure. It’s not about knowing everything, but becoming more comfortable in not knowing anything.",
      "The Subtle Art is all about coming to terms with all of the inevitable unimportant imperfections in life and then choosing to not give a f*ck about them. It’s about learning how to give a f*ck about the few things that truly matter.",
      "Download a Free Chapter of The Subtle Art of Not Giving a F*ck, My #1 New York Times Bestselling Book. Learn how happiness is a problem, follow along the misadventures of Disappointment Panda—my very own kind of superhero—and discover what you truly want out of life.",
      "Enter your email below to get the free chapter. Learn how to give a f*ck about the few things that truly matter. Your information is protected and I never spam, ever."
    ]
  },
  {
    slug: "ai-everyday-life",
    title: "Artificial Intelligence in Everyday Life: How AI is Shaping Our Future",
    shortDescription: "AI is no longer a futuristic concept. It is already part of our daily lives, silently working behind the scenes in apps, websites, and smart devices.",
    image: "/images/article-ai-life.png",
    type: "article",
    category: "Technology",
    date: "Apr 22, 2026",
    author: "Tanveer",
    readTime: "6 min",
    content: [
      "Artificial Intelligence (AI) is no longer a futuristic concept. It is already part of our daily lives, silently working behind the scenes in apps, websites, and smart devices. From mobile assistants to recommendation systems, AI is changing how we live, work, and interact with technology.",
      "Most people use AI without even realizing it. Social media feeds, voice assistants like Siri, navigation apps like Google Maps, and streaming platforms like Netflix all learn from user behavior and improve over time.",
      "AI is transforming education by making learning more personalized. Students can now use AI tutors for better understanding and learn at their own pace through smart platforms. Teachers also benefit from automated grading and lesson planning tools.",
      "In the business world, AI helps companies analyze large amounts of data, predict customer behavior, and automate repetitive tasks. However, it also raises concerns about job automation, making it important for people to learn new skills.",
      "Despite its benefits, AI also has challenges: privacy concerns, job displacement fears, and ethical issues in decision-making. These challenges require careful management and regulation as AI continues to make systems faster and smarter than ever before."
    ]
  }
];
