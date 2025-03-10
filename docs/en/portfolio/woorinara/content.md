# Woorinara Service

**Woorinara** is an application that provides information about administrative services for foreigners living in Korea.

<video width="500" height="100" controls>
  <source src="/portfolio/woorinara/woorinara_video.mp4" type="video/mp4">
</video>


## Why did we make Woorinara?

### Pain points

- Many foreigners struggle to understand the process and requirements of visa services. However, government websites do not update their English content frequently, and most details are only available in Korean.
- When visiting an immigration office, they often have difficulty understanding legal terms on application forms.
- Immigration officers usually speak only Korean, making it difficult to ask questions.

### Interviews with Foreign Residents

>- *“I was confused when I visited the immigration office because I didn’t know which documents to bring.” (Brendon, USA)*   
>- *“The staff at the immigration office speak only Korean, and they speak very fast.” (Anahi, Argentina)*   
>- *“I was rejected many times because I filled out the forms incorrectly before submitting them.” (Aylin, Germany)*

## What Woorinara help you

- **AI Chatbot** - Free to ask about administrative services for foreigners.
- **Forum** - Share tips and experiences related to civil services.
- **Translation and Form Examples** - Provide translations of immigration office documents and auto-completes forms based on user information.

## Roles and Responsibilities

### My role : AI Engineer

- Developed the AI chatbot
    - Crawled and processed data from government websites and loaded it into a database
    - Designed the RAG (Retrieval-Augmented Generation) chatbot architecture
    - Improved chatbot performance using user data
- Technologies Used: : Python, FastAPI, PostgreSQL, Qdrant, LangChain, OpenAI API, Docker, AWS Lambda

### Team member (7 people)

- Product Manager, Marketer, Designer
- Backend Developer, Frontend Developer (iOS), 2 AI Engineers

## About the AI Chatbot

- Provides information about administrative services for foreigners, including:
    - Visa applications, extensions, changes, and residence modifications
- Offers location-based guidance for government agencies, including:
    - Immigration offices
    - Self-Service Civil Document Kiosks
    - Foreign Civil Affairs Agencies

### Architecture

![image.png](/portfolio/woorinara/woorinara_architecture.png)

- Client: Asks a question 
- Backend: Verifies user ID & sends it to AI 
-  AI: Generates an answer 
-  Backend: Sends the answer back 
- Client: Receives & checks it

#### RAG (Retrieval-Augmented Generation) Chatbot

- Retrieves relevant information from the database and provides it to the LLM (Large Language Model) as context for the user's question.
- External Databases:
    - Location guide  → Extracts location data from a relational database (PostgreSQL).
    - Common Questions  → Retrieves civil service data from a vector database (Qdrant).
- Challenges:
    - Reducing response time
    - Improving chatbot accuracy
    - Integrating the chatbot with KakaoTalk

## Acomplishments

> **🏆 [2nd Prize] Won funding in the Data Usage Competition**   
*Issued by Korean National Information Society Agency (NIA) · Dec 2024*
<div style="display: flex; gap: 20px;">
  <img src="/about/livingLab.jpg" width="300" /> 
</div>

## Resources

- [App store](https://apps.apple.com/kr/app/woorinara/id6741319366?platform=iphone)
- [Kakaotalk](https://pf.kakao.com/_xlAxhxjn)