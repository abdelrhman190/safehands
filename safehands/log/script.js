
        const translations = {
            ar: {
                site_title: "الأيدي الآمنة",
                nav_home: "الرئيسية",
                nav_services: "الخدمات",
                nav_about: "من نحن",
                nav_contact: "تواصل معنا",
                nav_find_babysitters: "ابحث عن جليسات أطفال",
                nav_book_now: "الحجز",
                nav_profile: "الملف الشخصي",
                nav_login_signup: "تسجيل الدخول / إنشاء حساب",
                nav_logout: "تسجيل الخروج",
                form_title: "تسجيل الدخول",
                form_title_signup: "إنشاء حساب",
                signup_span: "أو استخدم بريدك الإلكتروني للتسجيل",
                signin_span: "أو استخدم بريدك الإلكتروني وكلمة المرور",
                label_name: "أدخل اسمك",
                label_email: "أدخل بريدك الإلكتروني",
                label_password: "أدخل كلمة المرور",
                forgot_password: "نسيت كلمة المرور؟",
                btn_signin: "تسجيل الدخول",
                btn_signup: "إنشاء حساب",
                btn_back: "رجوع",
                welcome_back: "مرحبًا بعودتك!",
                welcome_back_text: "أدخل بياناتك الشخصية لاستخدام جميع ميزات الموقع",
                hello_friend: "مرحبًا، صديق!",
                hello_friend_text: "سجل ببياناتك الشخصية لاستخدام جميع ميزات الموقع",
                msg_ready_signup: "جاهز لإنشاء الحساب...",
                msg_ready_signin: "جاهز لتسجيل الدخول...",
                msg_validation_failed: "جميع الحقول مطلوبة.",
                msg_invalid_email: "تنسيق البريد الإلكتروني غير صحيح.",
                msg_short_password: "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",
                msg_checking_email: "جاري التحقق من البريد الإلكتروني...",
                msg_email_exists: "البريد الإلكتروني مستخدم بالفعل.",
                msg_email_not_found: "البريد الإلكتروني غير موجود.",
                msg_sending_data: "جاري إرسال البيانات...",
                msg_signup_success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
                msg_signin_success: "تم تسجيل الدخول بنجاح!",
                msg_incorrect_password: "كلمة المرور غير صحيحة.",
                msg_network_error: "خطأ في الشبكة. يرجى المحاولة مرة أخرى لاحقًا.",
                msg_server_error: "خطأ في الخادوم: "
            },
            en: {
                site_title: "Safe Hands",
                nav_home: "Home",
                nav_services: "Services",
                nav_about: "About",
                nav_contact: "Contact",
                nav_find_babysitters: "Find Babysitters",
                nav_book_now: "Book Now",
                nav_profile: "My Profile",
                nav_login_signup: "Login/Sign Up",
                nav_logout: "Logout",
                form_title: "Sign In",
                form_title_signup: "Sign Up",
                signup_span: "or use your email for registration",
                signin_span: "or use your email password",
                label_name: "Enter your name",
                label_email: "Enter your email",
                label_password: "Enter your password",
                forgot_password: "Forget Your Password?",
                btn_signin: "Sign In",
                btn_signup: "Sign Up",
                btn_back: "Back",
                welcome_back: "Welcome Back!",
                welcome_back_text: "Enter your personal details to use all of site features",
                hello_friend: "Hello, Friend!",
                hello_friend_text: "Register with your personal details to use all of site features",
                msg_ready_signup: "Ready to create an account...",
                msg_ready_signin: "Ready to sign in...",
                msg_validation_failed: "Please fill in all fields.",
                msg_invalid_email: "Invalid email format.",
                msg_short_password: "Password must be at least 8 characters.",
                msg_checking_email: "Checking email...",
                msg_email_exists: "Email already in use.",
                msg_email_not_found: "Email not found.",
                msg_sending_data: "Sending data...",
                msg_signup_success: "Account created successfully! Please sign in.",
                msg_signin_success: "Sign in successful!",
                msg_incorrect_password: "Incorrect password.",
                msg_network_error: "Network error. Please try again later.",
                msg_server_error: "Server error: "
            }
        };

        function changeLanguage() {
            const lang = document.getElementById('languageSelect').value;
            const html = document.getElementById('htmlLang');
            html.setAttribute('lang', lang);
            html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translations[lang][key] || element.textContent;
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                element.placeholder = translations[lang][key] || element.placeholder;
            });

            const status = document.getElementById('status');
            status.innerHTML = `<i class="fas fa-info-circle"></i> ${translations[lang].msg_ready_signin}`;

            localStorage.setItem('language', lang);
            updateNavbar();
        }

        function updateNavbar() {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const loginSignupLink = document.getElementById('login-signup-link');
            const dashboardLink = document.getElementById('dashboard-link');
            const logoutLink = document.getElementById('logout-link');

            if (userData.email) {
                loginSignupLink.style.display = 'none';
                dashboardLink.style.display = 'block';
                logoutLink.style.display = 'block';
            } else {
                loginSignupLink.style.display = 'block';
                dashboardLink.style.display = 'none';
                logoutLink.style.display = 'none';
            }
        }

        function logout() {
            localStorage.removeItem('userData');
            updateNavbar();
            window.location.href = '/log/login.html';
        }

        async function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function updateStatus(message, isSuccess = false) {
            const status = document.getElementById('status');
            status.classList.remove('success');
            if (isSuccess) {
                status.classList.add('success');
                status.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
            } else {
                status.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
            }
            status.style.display = 'flex';
            status.style.visibility = 'visible';
            status.style.opacity = '1';
        }

        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('container');
            const registerBtn = document.getElementById('register');
            const loginBtn = document.getElementById('login');
            let signupForm = document.getElementById('signup-form');
            let signinForm = document.getElementById('signin-form');
            let status = document.getElementById('status');

            if (!signupForm || !signinForm || !status) {
                console.error('One or more elements not found:', { signupForm, signinForm, status });
                return;
            }

            const savedLang = localStorage.getItem('language') || 'ar';
            document.getElementById('languageSelect').value = savedLang;
            changeLanguage();
            updateNavbar();

            status.style.display = 'flex';
            status.style.visibility = 'visible';
            status.style.opacity = '1';
            console.log('Page loaded, initial status set:', { status: status.textContent });

            registerBtn.addEventListener('click', () => {
                container.classList.add("active");
                updateStatus(translations[savedLang].msg_ready_signup);
                console.log('Switched to Sign Up, status:', status.textContent);
            });

            loginBtn.addEventListener('click', () => {
                container.classList.remove("active");
                updateStatus(translations[savedLang].msg_ready_signin);
                console.log('Switched to Sign In, status:', status.textContent);
            });

            signupForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = document.getElementById('signup-name').value.trim();
                const email = document.getElementById('signup-email').value.trim();
                const password = document.getElementById('signup-password').value.trim();
                const lang = document.getElementById('languageSelect').value;

                updateStatus('');

                if (!name || !email || !password) {
                    updateStatus(translations[lang].msg_validation_failed);
                    console.log('Validation failed:', translations[lang].msg_validation_failed);
                    await delay(2000);
                    return;
                }
                if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    updateStatus(translations[lang].msg_invalid_email);
                    console.log('Invalid email:', translations[lang].msg_invalid_email);
                    await delay(2000);
                    return;
                }
                if (password.length < 8) {
                    updateStatus(translations[lang].msg_short_password);
                    console.log('Short password:', translations[lang].msg_short_password);
                    await delay(2000);
                    return;
                }

                try {
                    updateStatus(translations[lang].msg_checking_email);
                    console.log('Checking email:', translations[lang].msg_checking_email);
                    await delay(2000);
                    const checkResponse = await fetch(`https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?select=*&contact_info=eq.${encodeURIComponent(email)}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
                        }
                    });

                    if (!checkResponse.ok) {
                        updateStatus(translations[lang].msg_server_error + checkResponse.statusText);
                        console.log('Server error:', translations[lang].msg_server_error + checkResponse.statusText);
                        await delay(2000);
                        return;
                    }

                    const existingUsers = await checkResponse.json();
                    if (existingUsers.length > 0) {
                        updateStatus(translations[lang].msg_email_exists);
                        console.log('Email exists:', translations[lang].msg_email_exists);
                        await delay(2000);
                        return;
                    }

                    updateStatus(translations[lang].msg_sending_data);
                    console.log('Sending data:', translations[lang].msg_sending_data);
                    await delay(2000);
                    const response = await fetch('https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc',
                            'Prefer': 'return=representation' // تعديل لإرجاع البيانات
                        },
                        body: JSON.stringify({ name, contact_info: email, pass: password })
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        updateStatus(translations[lang].msg_server_error + (errorData.message || response.statusText));
                        console.log('Server error on POST:', translations[lang].msg_server_error + (errorData.message || response.statusText));
                        await delay(2000);
                        return;
                    }

                    const newUser = (await response.json())[0]; // استرجاع بيانات المستخدم الجديد
                    const userData = { id: newUser.id, name: newUser.name, email: newUser.contact_info };
                    localStorage.setItem('userData', JSON.stringify(userData));

                    updateStatus(translations[lang].msg_signup_success, true);
                    console.log('Signup success:', translations[lang].msg_signup_success, userData);
                    signupForm.reset();
                    await delay(2000);
                    container.classList.remove("active");
                    updateStatus(translations[lang].msg_ready_signin);
                } catch (error) {
                    console.error('Sign Up error:', error);
                    updateStatus(translations[lang].msg_network_error + ' ' + error.message);
                    console.log('Network error:', translations[lang].msg_network_error + ' ' + error.message);
                    await delay(2000);
                }
            });

            signinForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email = document.getElementById('signin-email').value.trim();
                const password = document.getElementById('signin-password').value.trim();
                const lang = document.getElementById('languageSelect').value;

                updateStatus('');

                if (!email || !password) {
                    updateStatus(translations[lang].msg_validation_failed);
                    console.log('Validation failed:', translations[lang].msg_validation_failed);
                    await delay(2000);
                    return;
                }
                if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    updateStatus(translations[lang].msg_invalid_email);
                    console.log('Invalid email:', translations[lang].msg_invalid_email);
                    await delay(2000);
                    return;
                }
                if (password.length < 8) {
                    updateStatus(translations[lang].msg_short_password);
                    console.log('Short password:', translations[lang].msg_short_password);
                    await delay(2000);
                    return;
                }

                try {
                    updateStatus(translations[lang].msg_checking_email);
                    console.log('Checking email:', translations[lang].msg_checking_email);
                    await delay(2000);
                    const response = await fetch(`https://ebzhfytrzcxsnepcudyl.supabase.co/rest/v1/users?contact_info=eq.${encodeURIComponent(email)}&select=*`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
                        }
                    });

                    if (!response.ok) {
                        updateStatus(translations[lang].msg_server_error + response.statusText);
                        console.log('Server error:', translations[lang].msg_server_error + response.statusText);
                        await delay(2000);
                        return;
                    }

                    const data = await response.json();
                    if (data.length === 0) {
                        updateStatus(translations[lang].msg_email_not_found);
                        console.log('Email not found:', translations[lang].msg_email_not_found);
                        await delay(2000);
                        return;
                    }

                    const user = data[0];
                    if (user.pass !== password) {
                        updateStatus(translations[lang].msg_incorrect_password);
                        console.log('Incorrect password:', translations[lang].msg_incorrect_password);
                        await delay(2000);
                        return;
                    }

                    const userData = { id: user.id, name: user.name, email: user.contact_info };
                    localStorage.setItem('userData', JSON.stringify(userData));
                    updateStatus(translations[lang].msg_signin_success, true);
                    console.log('Signin success:', translations[lang].msg_signin_success, userData);
                    updateNavbar();
                    await delay(2000);
                    window.location.href = '/index.html'; // التوجيه مباشرة إلى صفحة الحجز
                } catch (error) {
                    console.error('Sign In error:', error);
                    updateStatus(translations[lang].msg_network_error + ' ' + error.message);
                    console.log('Network error:', translations[lang].msg_network_error + ' ' + error.message);
                    await delay(2000);
                }
            });
        });
    