export const allTemplates = [
  {
    name: 'Blog Content',
    description:
      'An AI tool that generates comprehensive blog content based on your niche and outline',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
    aiPrompt:
      'Generate a detailed blog post based on the given niche and outline in Rich Text Editor Format.',
    slug: 'generate_blog_content',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
  {
    name: 'Blog Topic Ideas',
    description:
      'An AI tool that generates blog topic ideas based on your niche',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/1187/1187595.png',
    aiPrompt:
      'Give me 10 blog topic ideas in bullet points based on the given niche in Rich Text Editor Format.',
    slug: 'generate_blog_topic_ideas',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
    ],
  },
  {
    name: 'YouTube SEO Title',
    description:
      'An AI tool that generates SEO-friendly titles for YouTube videos based on video details',
    category: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/128/2977/2977742.png',
    aiPrompt:
      'Generate an SEO-friendly YouTube title based on the given video details in Rich Text Editor Format.',
    slug: 'generate_youtube_seo_title',
    form: [
      {
        label: 'Enter video details',
        field: 'textarea',
        name: 'videoDetails',
        required: true,
      },
    ],
  },
  {
    name: 'YouTube Description',
    description:
      'An AI tool that generates descriptions for YouTube videos based on video details',
    category: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/128/7032/7032407.png',
    aiPrompt:
      'Generate a YouTube video description based on the given video details in Rich Text Editor Format.',
    slug: 'generate_youtube_description',
    form: [
      {
        label: 'Enter video details',
        field: 'textarea',
        name: 'videoDetails',
        required: true,
      },
    ],
  },
  {
    name: 'YouTube Tags',
    description:
      'An AI tool that generates relevant tags for YouTube videos based on video details',
    category: 'YouTube',
    icon: 'https://cdn-icons-png.flaticon.com/128/3987/3987192.png',
    aiPrompt:
      'Generate relevant tags for a YouTube video based on the given video details in Rich Text Editor Format.',
    slug: 'generate_youtube_tags',
    form: [
      {
        label: 'Enter video details',
        field: 'textarea',
        name: 'videoDetails',
        required: true,
      },
    ],
  },
  {
    name: 'Rewrite Blogs (Plagiarism Free)',
    description:
      'An AI tool that rewrites blog content to make it plagiarism-free',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/4998/4998181.png',
    aiPrompt:
      'Rewrite the following blog content to make it plagiarism-free in Rich Text Editor Format.',
    slug: 'rewrite_blogs',
    form: [
      {
        label: 'Enter blog content',
        field: 'textarea',
        name: 'blogContent',
        required: true,
      },
    ],
  },
  {
    name: 'Text Improver',
    description:
      'An AI tool that improves the quality of the text by making it more engaging and readable',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/17282/17282392.png',
    aiPrompt:
      'Improve the following text to make it more engaging and readable in Rich Text Editor Format.',
    slug: 'text_improver',
    form: [
      {
        label: 'Enter text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'Add Emojis to Text',
    description:
      'An AI tool that adds relevant emojis to the text to enhance its expressiveness',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
    aiPrompt:
      'Add relevant emojis to the following text to enhance its expressiveness in Rich Text Editor Format.',
    slug: 'add_emojis_to_text',
    form: [
      {
        label: 'Enter text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Post Generator',
    description:
      'An AI tool that generates Instagram posts based on provided details',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
    aiPrompt:
      'Generate an engaging Instagram post based on the following details in Rich Text Editor Format.',
    slug: 'instagram_post_generator',
    form: [
      {
        label: 'Enter post details',
        field: 'textarea',
        name: 'postDetails',
        required: true,
      },
    ],
  },
  {
    name: 'Instagram Hashtag Generator',
    description:
      'An AI tool that generates relevant hashtags for Instagram posts based on post details',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
    aiPrompt:
      'Generate relevant hashtags for an Instagram post based on the following details in Rich Text Editor Format.',
    slug: 'instagram_hashtag_generator',
    form: [
      {
        label: 'Enter post details',
        field: 'textarea',
        name: 'postDetails',
        required: true,
      },
    ],
  },
  {
    name: 'English Grammar Check',
    description:
      'An AI tool that checks and corrects grammar in the provided text',
    category: 'Writing',
    icon: 'https://cdn-icons-png.flaticon.com/128/3597/3597026.png',
    aiPrompt:
      'Check and correct the grammar in the following text in Rich Text Editor Format.',
    slug: 'english_grammar_check',
    form: [
      {
        label: 'Enter text',
        field: 'textarea',
        name: 'text',
        required: true,
      },
    ],
  },
  {
    name: 'Write Code',
    description:
      'An AI tool that generates code based on the provided description',
    category: 'Programming',
    icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
    aiPrompt:
      'Write code based on the following description in Rich Text Editor Format.',
    slug: 'write_code',
    form: [
      {
        label: 'Enter code description',
        field: 'textarea',
        name: 'codeDescription',
        required: true,
      }
    ],
  },
  {
    name: 'Explain Code',
    description: 'An AI tool that explains the provided code in plain English',
    category: 'Programming',
    icon: 'https://cdn-icons-png.flaticon.com/128/711/711284.png',
    aiPrompt:
      'Explain the following code in plain English in Rich Text Editor Format.',
    slug: 'explain_code',
    form: [
      {
        label: 'Enter code',
        field: 'textarea',
        name: 'code',
        required: true,
      },
    ],
  },
];
