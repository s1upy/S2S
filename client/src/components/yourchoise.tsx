import mentorImage from "@assets/Mask group (1)_1755025858652.png";
import gameElementsImage from "@assets/Frame 479_1755025307481.png";
import megaphoneImage from "@assets/Group 229_1755028130652.png";
import teamImage from "@assets/Frame 501_1755025340599.png";

export default function YourChoise() {
    return (
        <div className="mt-36 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[36px] font-display text-center mb-6">Тебе <span className="text-primary">подойдет</span> если</h1>
            <div className="flex flex-wrap justify-around max-w-7xl w-full gap-8 mt-6">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 border-solid border-2 border-b-4 border-primary bg-[#EFF6FF] rounded-2xl flex items-center justify-center mb-2">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5 20C23.875 20 25.0521 19.5104 26.0312 18.5312C27.0104 17.5521 27.5 16.375 27.5 15C27.5 13.625 27.0104 12.4479 26.0312 11.4688C25.0521 10.4896 23.875 10 22.5 10C21.125 10 19.9479 10.4896 18.9688 11.4688C17.9896 12.4479 17.5 13.625 17.5 15C17.5 16.375 17.9896 17.5521 18.9688 18.5312C19.9479 19.5104 21.125 20 22.5 20ZM10 45V40H20V32.25C17.9583 31.7917 16.1354 30.9271 14.5312 29.6562C12.9271 28.3854 11.75 26.7917 11 24.875C7.875 24.5 5.26042 23.1354 3.15625 20.7812C1.05208 18.4271 0 15.6667 0 12.5V10C0 8.625 0.489583 7.44792 1.46875 6.46875C2.44792 5.48958 3.625 5 5 5H10V0H35V5H40C41.375 5 42.5521 5.48958 43.5312 6.46875C44.5104 7.44792 45 8.625 45 10V12.5C45 15.6667 43.9479 18.4271 41.8438 20.7812C39.7396 23.1354 37.125 24.5 34 24.875C33.25 26.7917 32.0729 28.3854 30.4688 29.6562C28.8646 30.9271 27.0417 31.7917 25 32.25V40H35V45H10ZM10 19.5V10H5V12.5C5 14.0833 5.45833 15.5104 6.375 16.7812C7.29167 18.0521 8.5 18.9583 10 19.5ZM22.5 27.5C24.5833 27.5 26.3542 26.7708 27.8125 25.3125C29.2708 23.8542 30 22.0833 30 20V5H15V20C15 22.0833 15.7292 23.8542 17.1875 25.3125C18.6458 26.7708 20.4167 27.5 22.5 27.5ZM35 19.5C36.5 18.9583 37.7083 18.0521 38.625 16.7812C39.5417 15.5104 40 14.0833 40 12.5V10H35V19.5Z" fill="#0080FF"/>
                        </svg>
                    </div>
                    <p className="text-[24px] font-semibold">Ты <span className="text-primary">хочешь</span></p>
                    <p className="text-regular text-[18px]">Не просто сдавать, а выигрывать</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 border-solid border-2 border-b-4 border-[#B5F43F] bg-[#F0FFD4] rounded-2xl flex items-center justify-center mb-2">
                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8421 27.5197V9.44882H18.9474V27.5197L15.3947 24.2126L11.8421 27.5197ZM23.6842 31.063V0H30.7895V23.9764L23.6842 31.063ZM0 39.2126V18.8976H7.10526V32.126L0 39.2126ZM0 45L15.2763 29.7638L23.6842 36.9685L36.9474 23.7402H33.1579V19.0157H45V30.8268H40.2632V27.0472L23.9211 43.3465L15.5132 36.1417L6.63158 45H0Z" fill="#9AE313"/>
                        </svg>
                    </div>
                    <p className="text-[24px] font-semibold">Ты <span className="text-[#B5F43F]">стремишься</span></p>
                    <p className="text-regular text-[18px]">В топ и готов работать на <br />результат</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 border-solid border-2 border-b-4 border-primary bg-[#EFF6FF] rounded-2xl flex items-center justify-center mb-2">
                        <svg width="53" height="43" viewBox="0 0 53 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 43L9.95455 33.9222V19.5889L0.5 14.3333L26.5 0L52.5 14.3333V33.4444H47.7727V16.9611L43.0455 19.5889V33.9222L26.5 43ZM26.5 23.1722L42.6909 14.3333L26.5 5.49444L10.3091 14.3333L26.5 23.1722ZM26.5 37.5653L38.3182 31.1153V22.0972L26.5 28.6667L14.6818 22.0972V31.1153L26.5 37.5653Z" fill="#0080FF"/>
                        </svg>
                    </div>
                    <p className="text-[24px] font-semibold">Тебе <span className="text-primary">важно</span></p>
                    <p className="text-regular text-[18px]">Куда идти дальше: вузы, <br />профессия, проекты </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 border-solid border-2 border-b-4 border-[#B5F43F] bg-[#F0FFD4] rounded-2xl flex items-center justify-center mb-2">
                        <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 45C19.8875 45 16.9625 44.4094 14.225 43.2281C11.4875 42.0469 9.10625 40.4437 7.08125 38.4188C5.05625 36.3937 3.45312 34.0125 2.27187 31.275C1.09062 28.5375 0.5 25.6125 0.5 22.5C0.5 19.3875 1.09062 16.4625 2.27187 13.725C3.45312 10.9875 5.05625 8.60625 7.08125 6.58125C9.10625 4.55625 11.4875 2.95312 14.225 1.77187C16.9625 0.590625 19.8875 0 23 0C26.1125 0 29.0375 0.590625 31.775 1.77187C34.5125 2.95312 36.8937 4.55625 38.9188 6.58125C40.9437 8.60625 42.5469 10.9875 43.7281 13.725C44.9094 16.4625 45.5 19.3875 45.5 22.5C45.5 25.6125 44.9094 28.5375 43.7281 31.275C42.5469 34.0125 40.9437 36.3937 38.9188 38.4188C36.8937 40.4437 34.5125 42.0469 31.775 43.2281C29.0375 44.4094 26.1125 45 23 45ZM23 40.5C28.025 40.5 32.2812 38.7562 35.7687 35.2687C39.2562 31.7812 41 27.525 41 22.5C41 22.2375 40.9906 21.9656 40.9719 21.6844C40.9531 21.4031 40.9437 21.1687 40.9437 20.9812C40.7562 22.0688 40.25 22.9688 39.425 23.6812C38.6 24.3937 37.625 24.75 36.5 24.75H32C30.7625 24.75 29.7031 24.3094 28.8219 23.4281C27.9406 22.5469 27.5 21.4875 27.5 20.25V18H18.5V13.5C18.5 12.2625 18.9406 11.2031 19.8219 10.3219C20.7031 9.44063 21.7625 9 23 9H25.25C25.25 8.1375 25.4844 7.37812 25.9531 6.72187C26.4219 6.06562 26.9937 5.53125 27.6687 5.11875C26.9187 4.93125 26.1594 4.78125 25.3906 4.66875C24.6219 4.55625 23.825 4.5 23 4.5C17.975 4.5 13.7188 6.24375 10.2312 9.73125C6.74375 13.2188 5 17.475 5 22.5H16.25C18.725 22.5 20.8438 23.3812 22.6062 25.1437C24.3687 26.9062 25.25 29.025 25.25 31.5V33.75H18.5V39.9375C19.25 40.125 19.9906 40.2656 20.7219 40.3594C21.4531 40.4531 22.2125 40.5 23 40.5Z" fill="#9AE313"/>
                        </svg>
                    </div>

                    <p className="text-[24px] font-semibold">Ты <span className="text-[#B5F43F]">ищешь</span></p>
                    <p className="text-regular text-[18px]">Сильное окружение — своих по<br/>духу</p>
                </div>
            </div>
        </div>
    );
}
