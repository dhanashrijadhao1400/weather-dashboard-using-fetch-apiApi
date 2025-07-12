// API Configuration
const API_CONFIG = {
    // For production, replace these with actual API endpoints and keys
    WEATHER_API: 'https://api.openweathermap.org/data/2.5/weather',
    NEWS_API: 'https://newsapi.org/v2/top-headlines',
    QUOTE_API: 'https://api.quotable.io/random',
    CRYPTO_API: 'https://api.coingecko.com/api/v3/simple/price',
    FACT_API: 'https://uselessfacts.jsph.pl/random.json',
    LOCATION_API: 'https://ipapi.co/json/'
};

// Mock data for demonstration (replace with actual API calls in production)
const MOCK_DATA = {
    weather: {
        name: "Mumbai",
        main: {
            temp: 28,
            feels_like: 32,
            humidity: 78,
            pressure: 1013
        },
        weather: [{
            description: "partly cloudy",
            icon: "02d"
        }],
        wind: {
            speed: 4.2
        },
        visibility: 8000
    },
    
    news: {
        articles: [
            {
                title: "Revolutionary AI Technology Transforms Healthcare Industry",
                description: "A groundbreaking artificial intelligence system shows remarkable success in early disease detection, potentially saving millions of lives worldwide.",
                url: "https://example.com/news1",
                source: { name: "Tech Health Today" },
                publishedAt: "2025-06-26T10:00:00Z"
            },
            {
                title: "Global Climate Initiative Achieves Major Milestone",
                description: "International cooperation leads to unprecedented progress in renewable energy adoption across 50+ countries.",
                url: "https://example.com/news2",
                source: { name: "Environmental Weekly" },
                publishedAt: "2025-06-26T08:30:00Z"
            },
            {
                title: "Space Exploration Reaches New Heights",
                description: "Private space companies collaborate on ambitious mission to establish permanent research station beyond Earth's orbit.",
                url: "https://example.com/news3",
                source: { name: "Space News Network" },
                publishedAt: "2025-06-26T07:15:00Z"
            },
            {
                title: "Breakthrough in Quantum Computing Achieved",
                description: "Scientists successfully demonstrate practical quantum computer application that could revolutionize cybersecurity and data processing.",
                url: "https://example.com/news4",
                source: { name: "Quantum Tech Journal" },
                publishedAt: "2025-06-26T06:45:00Z"
            }
        ]
    },
    
    quotes: [
        {
            content: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            content: "Innovation distinguishes between a leader and a follower.",
            author: "Steve Jobs"
        },
        {
            content: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            content: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon"
        },
        {
            content: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        }
    ],
    
    crypto: {
        bitcoin: { usd: 45234.50 },
        ethereum: { usd: 3456.78 },
        cardano: { usd: 1.23 },
        polkadot: { usd: 28.45 }
    },
    
    facts: [
        {
            text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
        },
        {
            text: "A group of flamingos is called a 'flamboyance'. This perfectly describes their vibrant pink color and elegant appearance."
        },
        {
            text: "Bananas are berries, but strawberries aren't. Botanically speaking, berries must have seeds inside their flesh."
        },
        {
            text: "The shortest war in history lasted only 38-45 minutes. It was between Britain and Zanzibar in 1896."
        }
    ],
    
    location: {
        city: "Mumbai",
        region: "Maharashtra",
        country_name: "India",
        timezone: "Asia/Kolkata",
        ip: "203.192.xxx.xxx",
        org: "Internet Service Provider"
    }
};

// Utility Functions
function getRandomDelay() {
    return Math.floor(Math.random() * 1000) + 500; // 500-1500ms
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// API Simulation Functions
async function fetchWeatherData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(`${API_CONFIG.WEATHER_API}?q=Mumbai&appid=YOUR_API_KEY&units=metric`);
        // return await response.json();
        
        return MOCK_DATA.weather;
    } catch (error) {
        console.error('Weather API Error:', error);
        throw new Error('Failed to fetch weather data');
    }
}

async function fetchNewsData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(`${API_CONFIG.NEWS_API}?country=in&apiKey=YOUR_API_KEY`);
        // return await response.json();
        
        return MOCK_DATA.news;
    } catch (error) {
        console.error('News API Error:', error);
        throw new Error('Failed to fetch news data');
    }
}

async function fetchQuoteData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(API_CONFIG.QUOTE_API);
        // return await response.json();
        
        const randomQuote = MOCK_DATA.quotes[Math.floor(Math.random() * MOCK_DATA.quotes.length)];
        return randomQuote;
    } catch (error) {
        console.error('Quote API Error:', error);
        throw new Error('Failed to fetch quote data');
    }
}

async function fetchCryptoData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(`${API_CONFIG.CRYPTO_API}?ids=bitcoin,ethereum,cardano,polkadot&vs_currencies=usd`);
        // return await response.json();
        
        // Add some random variation to prices
        const cryptoData = { ...MOCK_DATA.crypto };
        Object.keys(cryptoData).forEach(coin => {
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            cryptoData[coin].usd *= (1 + variation);
        });
        
        return cryptoData;
    } catch (error) {
        console.error('Crypto API Error:', error);
        throw new Error('Failed to fetch cryptocurrency data');
    }
}

async function fetchFactData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(API_CONFIG.FACT_API);
        // return await response.json();
        
        const randomFact = MOCK_DATA.facts[Math.floor(Math.random() * MOCK_DATA.facts.length)];
        return randomFact;
    } catch (error) {
        console.error('Fact API Error:', error);
        throw new Error('Failed to fetch random fact');
    }
}

async function fetchLocationData() {
    try {
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
        
        // In production, use actual API call:
        // const response = await fetch(API_CONFIG.LOCATION_API);
        // return await response.json();
        
        return MOCK_DATA.location;
    } catch (error) {
        console.error('Location API Error:', error);
        throw new Error('Failed to fetch location data');
    }
}

// Display Functions
function displayWeather(data) {
    const weatherContent = document.getElementById('weather-content');
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    
    weatherContent.innerHTML = `
        <div class="weather-main">
            <div class="temperature">${temp}°C</div>
            <div class="weather-desc">${data.weather[0].description}</div>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${data.name}</div>
        </div>
        <div class="weather-info">
            <div class="weather-detail">
                <div class="weather-detail-label">Feels like</div>
                <div class="weather-detail-value">${feelsLike}°C</div>
            </div>
            <div class="weather-detail">
                <div class="weather-detail-label">Humidity</div>
                <div class="weather-detail-value">${data.main.humidity}%</div>
            </div>
            <div class="weather-detail">
                <div class="weather-detail-label">Wind Speed</div>
                <div class="weather-detail-value">${data.wind.speed} m/s</div>
            </div>
            <div class="weather-detail">
                <div class="weather-detail-label">Pressure</div>
                <div class="weather-detail-value">${data.main.pressure} hPa</div>
            </div>
        </div>
    `;
}

function displayNews(data) {
    const newsContent = document.getElementById('news-content');
    const articles = data.articles.slice(0, 4); // Show only first 4 articles
    
    newsContent.innerHTML = articles.map(article => `
        <div class="news-item">
            <div class="news-title">
                <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>
            </div>
            <div class="news-description">${article.description || 'No description available'}</div>
            <div class="news-source">
                ${article.source.name} • ${formatDate(article.publishedAt)}
            </div>
        </div>
    `).join('');
}

function displayQuote(data) {
    const quoteContent = document.getElementById('quote-content');
    quoteContent.innerHTML = `
        <div class="quote-text">${data.content}</div>
        <div class="quote-author">— ${data.author}</div>
    `;
}

function displayCrypto(data) {
    const cryptoContent = document.getElementById('crypto-content');
    const cryptoNames = {
        bitcoin: 'Bitcoin',
        ethereum: 'Ethereum',
        cardano: 'Cardano',
        polkadot: 'Polkadot'
    };
    
    cryptoContent.innerHTML = Object.entries(data).map(([coin, price]) => `
        <div class="crypto-item">
            <div>
                <div class="crypto-name">${cryptoNames[coin]}</div>
                <div class="crypto-symbol">${coin.toUpperCase()}</div>
            </div>
            <div class="crypto-price">${formatCurrency(price.usd)}</div>
        </div>
    `).join('');
}

function displayFact(data) {
    const factContent = document.getElementById('fact-content');
    factContent.innerHTML = `
        <div class="fact-text">${data.text}</div>
    `;
}
function displayLocation(data) {
    const locationContent = document.getElementById('location-content');
    locationContent.innerHTML = `
        <div class="location-info">
            <div class="location-item">
                <div class="location-label">City</div>
                <div class="location-value">${data.city}</div>
            </div>
            <div class="location-item">
                <div class="location-label">Region</div>
                <div class="location-value">${data.region}</div>
            </div>
            <div class="location-item">
                <div class="location-label">Country</div>
                <div class="location-value">${data.country_name}</div>
            </div>
            <div class="location-item">
                <div class="location-label">Timezone</div>
                <div class="location-value">${data.timezone}</div>
            </div>
        </div>
    `;
}

    
