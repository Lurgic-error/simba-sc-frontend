<template>
    <div class="player-card">
        <div class="player-img">
            <img src="" alt="">
        </div>
        <div class="player-info info-overlay">
            <h4 class="player-name"></h4>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    .player-card {
        position: relative;
        // display: flex;
        // flex-direction: column;

        &:hover .info-overlay {
            height: 40%;
        }
    }

    .player-img {
        width: 100%;
        max-height: 400px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;

        }
    }

    .player-info {
        padding: 1.25rem;
    }

    .info-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #c6000075;
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: .5s ease;
    }
</style>