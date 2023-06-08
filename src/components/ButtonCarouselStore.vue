<template>
    <div class="category-carousel">
      <div class="carousel-wrapper">
        <button class="carousel-button prev" @click="prevSlide"><i class="fas fa-chevron-left"></i></button>
        <div class="carousel-content">
          <ul class="category-list" :style="{ transform: `translateX(-${activeIndex * slideWidth}px)` }">
            <li v-for="(category, index) in categories" :key="index" :class="{ active: index === activeIndex }">
              <button class="btn btn-wide bg-amber-500 text-zinc-800" @click="selectCategory(index)">{{ category }}</button>
            </li>
          </ul>
        </div>
        <button class="carousel-button next" @click="nextSlide"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css';

  export default {
    data() {
      return {
        categories: ['Food & Beverages', 'Daily Needs', 'Health', 'Beauty/Self Care', 'Automotive', 'Hobbies', 'Property'],
        activeIndex: 0,
        slideWidth: 120
      };
    },
    methods: {
      selectCategory(index) {
        console.log('Kategori dipilih:', this.categories[index]);
      },
      prevSlide() {
        if (this.activeIndex > 0) {
          this.activeIndex--;
        }
      },
      nextSlide() {
        if (this.activeIndex < this.categories.length - 1) {
          this.activeIndex++;
        }
      }
    }
  };
  </script>
  
  <style>
  .category-carousel {
    width: 100%;
    padding: 20px;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    color: orange;
  }
  
  .carousel-button.prev {
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
  
  .carousel-content {
    overflow: hidden;
    margin: 0 50px;
  }
  
  .category-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .category-list li {
    margin-right: 10px;
  }
  
  .category-button {
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .category-list li.active .category-button {
    background-color: #f00;
    color: #fff;
  }
  
  </style>
  