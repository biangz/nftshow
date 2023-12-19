<template>
    <div class="letters" id="loading-box">
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    </div>
</template>

<style>
.letters {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    background: #000;
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.spinner {
    animation: rotator 2s linear infinite;
}

@keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
        dashloading 1.4s ease-in-out infinite, 
        colors 5.6s ease-in-out infinite;
}

@keyframes colors {
    0% { stroke: #BDFC32; }
    100% { stroke: #FF64AE; }
}

@keyframes dashloading {
    0% { stroke-dashoffset: 187; }
    50% {
        stroke-dashoffset: 47;
        transform:rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform:rotate(360deg);
    }
}
</style>