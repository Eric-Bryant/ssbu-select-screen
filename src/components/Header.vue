<template>
  <header class="header">
    <div class="header__background"></div>
    <div class="options">
      <div class="options__joycon">
        <svg viewBox="0 0 78 78">
          <path
            d="M73.89 33.51Q57.167 20.1 40.45 6.67a2.341 2.341 0 0 0-1.455-.634 2.3 2.3 0 0 0-1.445.634Q20.828 20.085 4.108 33.51c-2 1.628-1.166 3.734 1.469 3.734h4.3c1.594 0 2.255.613 2.255 2.116v27.492c0 1.47.652 2.1 2.239 2.1h49.25c1.6 0 2.25-.634 2.25-2.1V39.36c0-1.5.653-2.116 2.248-2.116h4.306c2.646 0 3.459-2.106 1.465-3.734zm-23.7 20.633c0 1.492-.653 2.115-2.236 2.115H30.045c-1.576 0-2.244-.623-2.244-2.115V41.471c0-1.508.668-2.111 2.244-2.111h17.909c1.513 0 2.174.57 2.236 2.008z"
          />
        </svg>
      </div>
      <div class="options__settings">
        <svg viewBox="0 0 78 78">
          <path
            d="M33.229 7.346H23.114a12.985 12.985 0 0 0-5.35 1.113 13.8 13.8 0 0 0-4.377 3.065 14.467 14.467 0 0 0-4.02 10.106v38.944a14.188 14.188 0 0 0 1.07 5.525 14.521 14.521 0 0 0 2.95 4.514 13.8 13.8 0 0 0 4.377 3.065 12.984 12.984 0 0 0 5.35 1.112h10.115a1.121 1.121 0 0 0 .843-.337 1.212 1.212 0 0 0 .324-.876V8.559a1.212 1.212 0 0 0-.324-.875 1.118 1.118 0 0 0-.843-.338zM17.8 19.811a5.641 5.641 0 0 1 8.17 0 6.186 6.186 0 0 1 0 8.489 5.638 5.638 0 0 1-8.17 0 6.186 6.186 0 0 1 0-8.489zm6.613 20.55a2.681 2.681 0 0 1-.736 1.92 2.536 2.536 0 0 1-3.65 0 2.874 2.874 0 0 1 0-3.841 2.539 2.539 0 0 1 3.65 0 2.687 2.687 0 0 1 .733 1.921zm-7.521 7.883a2.459 2.459 0 0 1-1.848-.774 2.845 2.845 0 0 1 0-3.841 2.591 2.591 0 0 1 3.7 0 2.845 2.845 0 0 1 0 3.841 2.466 2.466 0 0 1-1.855.774zm6.785 4.345a2.534 2.534 0 0 1-3.65 0 2.871 2.871 0 0 1 0-3.839 2.534 2.534 0 0 1 3.65 0 2.871 2.871 0 0 1 0 3.839zm4.919-5.119a2.593 2.593 0 0 1-3.7 0 2.845 2.845 0 0 1 0-3.841 2.591 2.591 0 0 1 3.7 0 2.848 2.848 0 0 1 0 3.841zm38.97-31.4a14.422 14.422 0 0 0-2.951-4.547 13.821 13.821 0 0 0-4.376-3.065 12.992 12.992 0 0 0-5.35-1.113H44.771a1.115 1.115 0 0 0-.843.338 1.207 1.207 0 0 0-.324.875v65.019a1.208 1.208 0 0 0 .324.876 1.118 1.118 0 0 0 .843.337h10.115a12.991 12.991 0 0 0 5.35-1.112 13.821 13.821 0 0 0 4.376-3.065 14.524 14.524 0 0 0 2.951-4.513 14.188 14.188 0 0 0 1.07-5.525V21.63a14.448 14.448 0 0 0-1.07-5.559zM54.261 18.7a2.535 2.535 0 0 1 3.649 0 2.869 2.869 0 0 1 0 3.84 2.535 2.535 0 0 1-3.649 0 2.872 2.872 0 0 1 0-3.84zm4.386 12.228a2.679 2.679 0 0 1-.737 1.921 2.535 2.535 0 0 1-3.649 0 2.678 2.678 0 0 1-.736-1.921 2.8 2.8 0 0 1 .736-1.954 2.464 2.464 0 0 1 3.649 0 2.8 2.8 0 0 1 .737 1.954zM48.6 25.74a2.663 2.663 0 0 1 .745-1.92 2.591 2.591 0 0 1 3.7 0 2.845 2.845 0 0 1 0 3.841 2.593 2.593 0 0 1-3.7 0 2.66 2.66 0 0 1-.745-1.921zm11.6 25.704a5.716 5.716 0 0 1-8.17 0 5.779 5.779 0 0 1-1.686-4.21 5.9 5.9 0 0 1 1.686-4.246 5.641 5.641 0 0 1 8.17 0 5.9 5.9 0 0 1 1.686 4.246 5.779 5.779 0 0 1-1.686 4.21zm2.691-23.783a2.593 2.593 0 0 1-3.7 0 2.845 2.845 0 0 1 0-3.841 2.591 2.591 0 0 1 3.7 0 2.845 2.845 0 0 1 0 3.841z"
          />
        </svg>
      </div>
    </div>
    <div class="sort-dropdown">
      <div class="sort-dropdown__label">Solo Battle</div>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapActions(['setSortTypeState']),
    setSortType(sortType) {
      this.setSortTypeState(sortType)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: flex-start;
  background: #111;
  padding: 0px 0px 5px 0px;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      178deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(251, 219, 82, 1) 25%,
      rgba(251, 219, 82, 1) 38%,
      rgba(172, 1, 2, 1) 39%,
      rgba(172, 1, 2, 1) 61%
    );
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }
}

.options {
  display: flex;
  z-index: 1;
  width: 300px;
  background: #870002;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);

  &__joycon {
    background: #ab000e;
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);

    svg {
      width: 35px;

      path {
        stroke: #ff7174;
        fill: #ff7174;
      }
    }
  }

  &__settings {
    background: #870002;
    flex-basis: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 35px;

      path {
        stroke: #ff7174;
        fill: #ff7174;
      }
    }
  }
}

.sort-dropdown {
  margin: 2.5px 0px 0px 20px;
  font-family: 'Roboto Condensed', sans-serif;
  cursor: pointer;
  background: #111;
  display: flex;
  justify-content: center;
  width: 425px;
  padding: 3px 3px;
  clip-path: polygon(
    3.5% 0%,
    96.5% 0%,
    100% 50%,
    96.5% 100%,
    3.5% 100%,
    0% 50%
  );

  &__label {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 5px 0;
    background: #fdd401;
    width: calc(100% - 10px);
    text-align: center;
    color: #111;
    clip-path: polygon(
      3.5% 0%,
      96.5% 0%,
      100% 50%,
      96.5% 100%,
      3.5% 100%,
      0% 50%
    );
  }
}
</style>
