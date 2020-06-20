---
layout: post
title: Nuances of Privacy
---

For the first part of this 3 part series, if you have not read it, you can find it [here](https://jagrut.xyz/2020-04-18-privacy-philosophy/) where I talk about the philosophy of why privacy is essential. In this post, I will dive a bit deeper into technical aspects and give an overview of the current state of privacy and data protection laws. The main focus is on informational privacy in digital form.

### Security and Privacy

These two terms are often used interchangeably by many of my conversationalists. Both are different terms. They are often coupled in similar settings, especially when we talk about digital privacy. Claiming to be secure, means that there is a layer of protection that forbids unauthorized access to whatever is being protected. Mind you, this does not implicitly mean that the service provider has no access to your data.

Privacy, on the other hand, means a consumer knows what data is being collected about them, for what reason, and being transparent and accountable for it. To put it into context, your Facebook account is quite secure as it does not allow anyone else other than you to access your account (unless your password is _daddy's princess_ or your birthdate or one of the thousand stupid passwords to choose from). But is it really protecting your privacy? If you don't know about the Cambridge Analytica scandal, you can search the internet (yes, please stop using 'Google it'!) and you will find plenty of information about it or watch _The Great Hack_, a documentary.

All the "secure" websites use cryptographic algorithms to provide a layer of protection. There is sound math behind it and I take the liberty to say that a layman can trust the standardized algorithms (Of course, we can argue about it but that argument is out of the scope of this blog). But, `to err is human`. The team implementing them might make some mistakes which leaves the system vulnerable. Even the companies with some of the brightest minds get hacked: [Google](https://www.theverge.com/2018/10/8/17951890/google-plus-shut-down-security-api-change-gmail-android), [eBay](https://www.washingtonpost.com/news/the-switch/wp/2014/05/21/ebay-asks-145-million-users-to-change-passwords-after-data-breach/), [JPMorgan Chase](https://dealbook.nytimes.com/2014/10/02/jpmorgan-discovers-further-cyber-security-issues/?_php=true&_type=blogs&_r=0), [Facebook](https://www.wired.com/story/facebook-security-breach-50-million-accounts/), and the list goes [on and on](https://en.wikipedia.org/wiki/List_of_data_breaches). By pointing this, I do not mean to undermine these companies or the people working there or make you paranoid. I intended to make you conscious of what you put on the internet. Always think in terms of the implications on your life if a malicious hacker gets access to your information. Service providers try their best to keep the data secure, but no one can guarantee absolute security. (If you see someone do that, run!)

To help you be more conscious of your privacy and the implications of your data, let's look at an example. I am assuming you have used WhatsApp at least once. When you chat with your friend it says: _" Messages to this chat and calls are now secured with end-to-end encryption"_. In layman terms, it means that only you and your friend can read the content and no one else, not even WhatsApp. Sounds good, that's what we want for perfect privacy. But there are a few caveats. First, the code of WhatsApp is not [open source](https://en.wikipedia.org/wiki/Open_source) which means there is no way of analyzing if what they are claiming is true. Second, if you read the instruction in the "Chat Backup" section, they do mention that end-to-end encryption does not apply to backups. This means, even if you don't have backups turned on and if your friend does, the backups of your friend including your conversation, will be readable by WhatsApp. Third, even if the content of chat is end-to-end encrypted, the metadata is not. Metadata means additional information like who you are talking to, at what time, number of messages exchanged, etc. This seemingly harmless data is quite powerful. With this information, WhatsApp can infer, with fairly high accuracy, who your best friends are, with whom does your boyfriend talks to after finishing talks with you, if you are talking with your therapist, etc. The metadata is a by-product of using digital services and one of the most powerful metrics for analysis of human behavior.

Next time you go on the internet, do keep an eye on what kind of data and metadata is being asked from you and think about its implications for a minute before using their services.

### Predatory Behavior

_There is no such thing as free lunch._ No matter how many times we have read this quote and seen the examples in real life, we are eerily fine with digital service providers offering free services. We never question them for what they are taking in return and most of the time, it's hidden in plain sight for the majority of the population. We as consumers are lazy. Tech companies know this. They extrapolate this trait to bind consumers to their platform. When was the last time you changed your email address or cloud storage provider for storing your photos and documents? In the average scenario, the conversion to a different platform is extremely low. The user experience for transferring your photos from Google to some other cloud storage provider is abysmal, I wonder why!

`The irony of modern human life is that we never lie to Google but almost exclusively to our friends and family.`

If you use Gmail as your email service provider, I hope you know this by now that Google can and has been reading all your emails. And I don't mean only the metadata but content as well. I admit I had been using it since 2008 till late 2018. That's a decade worth of information about me. From all the flights and hotels reservation, to which magazines I read, which bank accounts I held, what has changed in my eating habits, every fucking thing! It not only knows and remembers details about me better than me but can also fairly accurately predict what would be my next move. The worst part is not this. Google Analytics tracks you on the websites which are not owned by Google but which use their "free" service to collect metadata about their visitors [4]. 

Online tracking is much worse than real-world tracking. When you are followed by a stranger all the time, or you have a camera in front of you, it does make you uncomfortable because you can feel and see that you are being followed. In the digital world, it is easier and one can obtain much more details with less cost. And it is hidden, never explicit. The privacy policy of websites is not only difficult to read for a layman but also does not tell the whole story.

_"In 2016, the Google-incubated augmented reality game, Pokémon Go, tested economies of action on the streets. Game players did not know that they were pawns in the real game of behavior modification for profit, as the rewards and punishments of hunting imaginary creatures were used to herd people to the McDonald’s, Starbucks and local pizza joints that were paying the company for “footfall,” in exactly the same way that online advertisers pay for “click-through” to their websites."_ [2]

`Unequal knowledge about us produces unequal power over us.`

The constant surveillance is not limited to corporates. [NSA's Mainway](https://www.wired.com/story/inside-the-nsas-secret-tool-for-mapping-your-social-network/) is constantly creating and updating social graphs of all telephone calls from 4 biggest carriers in the USA. In layman terms, everyone is guilty, until proven innocent which is a major violation of international human rights. Many countries have, to a certain degree, implemented tools for [mass surveillance](https://en.wikipedia.org/wiki/Mass_surveillance). The narratives given by the governments, usually have good intentions of using such tools. But then again, governments change. 

`Capability matters, always, regardless of whether it is used. An unfired gun is no less lethal before it is drawn.`


### Regulations

During my conversations with friends, often they feel helpless in the face of such penetrative surveillance. While there are several habits you can change in your digital life to mitigate tracking, one tool that we still have high hopes on is __law__. In most democratic countries, the judicial body is independent of the functioning government. This means that they can not only make corporates and governments accountable for their actions but also intervene and stop the violation of fundamental human rights. Although, in recent years, due to severe lobbying from corporates and undue pressure from governments, they do not enjoy the autonomy as they should. Mere laws are not enough, enforcing is equally important. Getting into the details of data protection laws in each country is out of the scope of this blog.

The General Data Protection Regulation (GDPR) in the European Union is considered to be the most rigorous to date across the globe on data protection and privacy. This has forced many of the tech giants to be more transparent about their data collection and usage practices. The authorities have also fined the corporates in case of violations. For example in Q4 of 2018, [Google was fined €50 million](https://www.theverge.com/2019/1/21/18191591/google-gdpr-fine-50-million-euros-data-consent-cnil) for GDPR violation in France. The revenue of Google for Q3 of 2018 was $33.74 billion. Was this enough? I don't know.

There are criticisms as well. As in the example above, tech giants can easily bear the costs of violations whereas the startups who now have to incur significant costs to comply with data protection laws can go bankrupt in case of violation. The research community who already suffers from a lack of funding also has to account for the cost of compliance with these laws.

In my opinion, there needs to be a change in mindset. Everything is on digital platforms and it will be even more with each passing day. Data protection laws are a must and should be as strict as possible. [Privacy-by-design](https://en.wikipedia.org/wiki/Privacy_by_design) and [Secure-by-design](https://en.wikipedia.org/wiki/Secure_by_design) principles should be followed when building any digital platform. The corresponding costs should always be accounted for, be it your new startup or your research. Venture capitalists and funding agencies should consider these extra costs and fund accordingly.


There are several steps that we as an individual can take to bring about a change in privacy protection. I will discuss that in my next blog. If you are interested in having a conversation over a coffee or have questions, please feel free to reach out to me via any of the platforms mentioned at the bottom of the page.

Till next time!

### References and further reading

[1] [Inside the NSA’s Secret Tool for Mapping Your Social Network](https://www.wired.com/story/inside-the-nsas-secret-tool-for-mapping-your-social-network/)

[2] [You are now remotely controlled](https://www.nytimes.com/2020/01/24/opinion/sunday/surveillance-capitalism.html)

[3] Book: [Data and Goliath - The Hidden Battles to Collect Your Data and Control Your World by Bruce Schneier](https://www.schneier.com/books/data_and_goliath/)

[4] [Biggest Tracker Network](https://spreadprivacy.com/biggest-tracker-networks/)

[5] [Monitoring being pitched to fight Covid-19 was tested on refugees](https://www.thebureauinvestigates.com/stories/2020-04-28/monitoring-being-pitched-to-fight-covid-19-was-first-tested-on-refugees)

[6] [Most Americans aren't aware that Facebook owns WhatsApp, or that Google owns Waze](https://spreadprivacy.com/facebook-whatsapp/)
