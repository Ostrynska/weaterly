# Weatherly App

### Objective:
Develop a **Single Page Application (SPA)** to display weather information for selected cities.

![image](https://github.com/user-attachments/assets/b165b13f-eef6-4b2b-9e77-b01f3731699b)

### Features:

1. **City List with Weather Cards**:
   - Display a list of cities as cards.
   - Each card contains:
     - Brief weather information.
     - On click: shows detailed information, navigates to a detailed page or deletes card.
   - A button to refresh the weather data for the specific city.

2. **Add/Remove Cities**:
   - Add new cities to the list. A request is sent to fetch the current weather, and the city is displayed immediately.
   - Remove cities from the list.

3. **Data Persistence**:
   - Store the list of cities in **LocalStorage**.
   - On page reload:
     - Previously selected cities remain visible.
     - Weather data is updated automatically.

4. **Detailed Weather View** *(Bonus)*:
   - Display a graphical representation of temperature based on its value using hourly forecasts for the current day.

![image](https://github.com/user-attachments/assets/73103f9a-af5b-458b-a202-7e60ad64217b)


### Requirements:

1. **API Integration**:
   - Use [Weather API](https://openweathermap.org/).

2. **Technology Stack**:
   - **React** with **TypeScript**.
   - State management using **Redux + Redux-Thunk** *(Recommend: Redux Toolkit)*.
   - **React Router** for navigation.

3. **Styling**:
   - Use a CSS preprocessor *(preferably SCSS)*.
   - Mobile-first design.

4. **Code Quality**:
   - Clean, well-formatted code.
   - Use **ESLint** and **Prettier** for linting and formatting.

5. **Testing**:
   - Cover key (WeaterCard) components with tests using **Jest**.
   - Optionally, include **React Testing Library**.

6. **Component Design**:
   - Functional components with **React Hooks**.

---

### Repository:
Find the full project and implementation details in the [GitHub Repository](https://github.com/Ostrynska/weatherly-app).

---

### Installation and Setup:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ostrynska/weatherly.git
   cd weatherly-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your OpenWeather API key:
     ```
     VITE_API_API_WEATHER=your_api_key_here
     ```

4. **Run the app**:
   ```bash
   npm run build
   ```

### Author:
[Kateryna Ostrynska](https://github.com/Ostrynska)
