const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח הגאורגי — מתכונים כשרים',
                description: 'המטבח הגאורגי — 50 מתכונים גאורגיים אותנטיים, כולם כשרים, בעברית.'
            },
            header: {
                logo: 'המטבח הגאורגי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח הגאורגי',
                subtitle: 'מתכונים כשרים מהמטבח היהודי-גאורגי',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                'חצ׳פורי ומאפים': 'חצ׳פורי ומאפים',
                'חינקלי ובשרים': 'חינקלי ובשרים',
                'פחלי ואגוזים': 'פחלי ואגוזים',
                'מרקים ותבשילים': 'מרקים ותבשילים',
                'קינוחים ומשקאות': 'קינוחים ומשקאות'
            },
            difficulty: {
                'קל': 'קל',
                'בינוני': 'בינוני',
                'מאתגר': 'מאתגר'
            },
            kosher: {
                'בשרי': 'בשרי',
                'חלבי': 'חלבי',
                'פרווה': 'פרווה'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                kosher: 'כשרות',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח הגאורגי — מתכונים גאורגיים כשרים, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Georgian Kitchen — Kosher Recipes',
                description: 'Georgian Kitchen — 50 authentic Georgian recipes, all kosher, in English.'
            },
            header: {
                logo: 'Georgian Kitchen',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Georgian Kitchen',
                subtitle: 'Kosher recipes from the Georgian-Jewish kitchen',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                'חצ׳פורי ומאפים': 'Khachapuri & Breads',
                'חינקלי ובשרים': 'Khinkali & Meats',
                'פחלי ואגוזים': 'Pkhali & Walnut Dishes',
                'מרקים ותבשילים': 'Soups & Stews',
                'קינוחים ומשקאות': 'Sweets & Drinks',
                'Khachapuri & Breads': 'Khachapuri & Breads',
                'Khinkali & Meats': 'Khinkali & Meats',
                'Pkhali & Walnut Dishes': 'Pkhali & Walnut Dishes',
                'Soups & Stews': 'Soups & Stews',
                'Sweets & Drinks': 'Sweets & Drinks'
            },
            difficulty: {
                'קל': 'Easy',
                'בינוני': 'Medium',
                'מאתגר': 'Hard',
                'Easy': 'Easy',
                'Medium': 'Medium',
                'Hard': 'Hard'
            },
            kosher: {
                'בשרי': 'Meat',
                'חלבי': 'Dairy',
                'פרווה': 'Parve',
                'Meat': 'Meat',
                'Dairy': 'Dairy',
                'Parve': 'Parve'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                kosher: 'Kosher',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Georgian Kitchen — Authentic kosher Georgian recipes',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
