import React from 'react'

export default function DashboardSidebar({setCollapse}) {


    return (
        <div className='dashboard-sidebar'>
            <button className="btn toggle-btn shadow-none" onClick={() => setCollapse(prev => !prev)}><i class="fa-solid fa-bars-staggered"></i></button>
            <div className="sidebar-logo text-center">
                <svg width="139" height="132" viewBox="0 0 139 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 44.5C27 32.3497 36.8497 22.5 49 22.5H92C104.15 22.5 114 32.3497 114 44.5V87.5C114 99.6503 104.15 109.5 92 109.5H49C36.8497 109.5 27 99.6503 27 87.5V44.5Z" fill="white" />
                    <path d="M50.0045 67.0473C50.0045 66.2516 50.0045 65.4574 50.0045 64.6618C50.027 64.5722 50.0615 64.4841 50.0675 64.3946C50.2025 62.6988 50.5474 61.0462 51.0768 59.4266C51.1697 59.1414 51.2987 59.0668 51.5806 59.0698C52.9378 59.0832 54.2965 59.0772 55.6537 59.0728C55.8246 59.0728 56.0001 59.0593 56.1666 59.022C56.5745 58.9309 56.8204 58.5936 56.8024 58.1801C56.7799 57.6874 56.417 57.3784 55.8082 57.371C54.9968 57.3605 54.184 57.368 53.3712 57.368C52.8988 57.368 52.4249 57.368 51.8821 57.368C52.128 56.8918 52.359 56.4917 52.5434 56.0707C52.6799 55.7588 52.8703 55.6677 53.2123 55.6692C56.9134 55.6826 60.6145 55.6796 64.3157 55.6766C64.9335 55.6766 65.3234 55.3482 65.3339 54.8437C65.3444 54.3436 64.9515 54.0032 64.3427 53.9883C64.2362 53.9853 64.1297 53.9883 64.0232 53.9883C60.802 53.9883 57.5792 53.9883 54.358 53.9883H53.8481C54.286 53.4524 54.6564 53.0195 55.0028 52.5686C55.1738 52.3462 55.3688 52.2731 55.6477 52.2746C57.9107 52.285 60.1736 52.2805 62.4366 52.279C62.5956 52.279 62.759 52.2835 62.915 52.2567C63.2944 52.191 63.5299 51.9671 63.5989 51.5819C63.7023 51.0027 63.3034 50.5937 62.6121 50.5922C60.895 50.5877 59.1779 50.5922 57.4593 50.5892C57.3348 50.5892 57.2088 50.5773 57.0499 50.5698C62.5941 45.5913 71.2336 43.8089 78.9733 47.3648C86.9514 51.0296 90.5056 58.6249 90.7605 64.1647C90.6151 64.1647 90.4711 64.1647 90.3256 64.1647C88.6355 64.1647 86.9439 64.1647 85.2538 64.1647C85.0949 64.1647 84.9329 64.1647 84.7769 64.1916C84.405 64.2528 84.1366 64.5543 84.1051 64.926C84.0721 65.3082 84.2686 65.6545 84.6255 65.7739C84.8099 65.8351 85.0169 65.8515 85.2133 65.8515C86.9574 65.8575 88.7015 65.8545 90.4456 65.8545H90.915C90.8805 66.4382 90.8475 66.9726 90.8145 67.5444H90.2672C85.2088 67.5444 80.149 67.5444 75.0907 67.5459C74.8927 67.5459 74.6903 67.5578 74.4983 67.6011C74.1264 67.6832 73.8865 67.9997 73.8775 68.3759C73.8685 68.7685 74.1114 69.1073 74.4953 69.1939C74.6873 69.2372 74.8897 69.2491 75.0877 69.2491C80.08 69.2521 85.0724 69.2521 90.0647 69.2521H90.5941C90.4621 69.8567 90.3436 70.3926 90.2237 70.942H89.7093C85.9557 70.942 82.2005 70.942 78.4469 70.945C78.2489 70.945 78.0435 70.9554 77.856 71.0091C77.4766 71.1181 77.2472 71.4824 77.2847 71.8585C77.3237 72.2526 77.5966 72.5527 77.9895 72.6079C78.159 72.6318 78.3344 72.6303 78.5069 72.6303C82.0746 72.6303 85.6422 72.6303 89.2099 72.6303C89.3599 72.6303 89.5113 72.6303 89.7183 72.6303C89.5233 73.114 89.3404 73.5111 89.2039 73.9231C89.0944 74.2515 88.913 74.3485 88.5621 74.347C81.2528 74.3351 73.9449 74.3381 66.6356 74.3396C66.4497 74.3396 66.2622 74.3366 66.0778 74.3605C65.6729 74.4127 65.3744 74.7367 65.3474 75.1337C65.3219 75.504 65.5679 75.8682 65.9488 75.9697C66.1378 76.0205 66.3432 76.0279 66.5397 76.0279C73.5685 76.0309 80.5989 76.0309 87.6278 76.0309H88.1497C87.8227 76.531 87.5303 76.9415 87.2799 77.3744C87.1179 77.6551 86.9124 77.7282 86.602 77.7267C82.7944 77.7163 78.9868 77.7208 75.1792 77.7208C75.0727 77.7208 74.9662 77.7178 74.8597 77.7208C74.2389 77.7446 73.8715 78.0686 73.8775 78.5836C73.8835 79.0837 74.2404 79.3972 74.8402 79.4255C74.9467 79.43 75.0532 79.4255 75.1597 79.4255C78.4739 79.4255 81.7896 79.4255 85.1039 79.4255C85.2493 79.4255 85.3948 79.4255 85.5403 79.4255C85.1069 79.9823 84.666 80.4421 84.1876 80.8616C84.0286 81.0004 83.7752 81.1049 83.5652 81.1049C79.0258 81.1184 74.4863 81.1154 69.9454 81.1169C69.7609 81.1169 69.5705 81.1199 69.392 81.1646C68.9781 81.2662 68.7426 81.6005 68.7651 82.0155C68.7876 82.4186 69.0756 82.7306 69.4895 82.7858C69.6469 82.8067 69.8074 82.8052 69.9679 82.8052C73.696 82.8052 77.4226 82.8052 81.1508 82.8052C81.2887 82.8052 81.4267 82.8052 81.6577 82.8052C81.5392 82.9097 81.5062 82.947 81.4642 82.9739C79.2777 84.3622 76.9218 85.3385 74.3663 85.8057C73.4411 85.9744 72.5023 86.0729 71.5695 86.2043H69.2525C68.9646 86.1715 68.6752 86.1386 68.3872 86.1058C64.0023 85.6191 60.1301 83.9547 56.8444 81.0198C53.3337 77.8835 51.1442 73.9903 50.3179 69.3566C50.1815 68.5908 50.105 67.8161 50 67.0458L50.0045 67.0473Z" fill="#8101FF" />
                </svg>
            </div>

            <div className='sidebar-nav'>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Calendar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Notes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Quizmode</a>
                    </li>
                </ul>
            </div>

            <div className="sign-out w-100 text-center">
                <a href="#" className='text-white'>
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.4999 4.06637L27.4999 21.9425C27.4999 23.9051 25.8717 25.5 23.8682 25.5L18.1742 25.5C17.4506 25.5 16.8672 24.9285 16.8672 24.2197C16.8672 23.5108 17.4506 22.9393 18.1742 22.9393L23.8682 22.9393C24.429 22.9393 24.8903 22.4918 24.8903 21.9381L24.8903 4.06194C24.8903 3.51258 24.4335 3.0607 23.8682 3.0607L18.1742 3.0607C17.4506 3.0607 16.8672 2.48919 16.8672 1.78035C16.8672 1.07151 17.4506 0.500004 18.1742 0.500004L23.8682 0.500004C25.8717 0.500003 27.4999 2.0949 27.4999 4.05751L27.4999 4.06637Z" fill="white" />
                        <path d="M13.2087 6.29902C12.7474 6.49838 12.4534 6.94584 12.4534 7.44203L12.4534 11.1369L8.17954 11.1369C7.12577 11.1369 6.271 11.9742 6.271 13.0064C6.271 14.0387 7.12577 14.876 8.17954 14.876L12.4534 14.876L12.4534 18.5709C12.4534 19.0626 12.7519 19.5101 13.2087 19.7139C13.67 19.9132 14.2082 19.8291 14.5836 19.5012L20.8745 13.9368C21.1414 13.702 21.2951 13.3609 21.2951 13.0109C21.2951 12.6609 21.1414 12.3198 20.8745 12.0849L14.5836 6.52053C14.2082 6.18826 13.67 6.10409 13.2087 6.30788L13.2087 6.29902Z" fill="white" />
                        <path d="M4.58392 13.0023C4.58392 14.0345 3.72915 14.8718 2.67538 14.8718L2.40854 14.8718C1.35477 14.8718 0.5 14.0345 0.5 13.0023C0.5 11.97 1.35477 11.1327 2.40854 11.1327L2.67538 11.1327C3.72915 11.1327 4.58392 11.97 4.58392 13.0023Z" fill="white" />
                    </svg>

                    <span>
                        Sign out
                    </span>
                </a>
            </div>
        </div>
    )
}
