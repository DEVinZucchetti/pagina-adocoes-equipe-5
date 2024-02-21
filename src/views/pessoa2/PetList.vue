<template>
  <div class="container">
    <h1>Adote um amigo !</h1>

    <div class="search-container">
      <input v-model="searchQuery" placeholder="Digite para buscar" />
      <button @click="searchPets">Buscar</button>
    </div>

    <div class="pet-list">     

      <div class="pet-item" v-for="pet in pets" @click="redirectToProfile(pet.id)" data-test="item-pet">
        <img src="https://i.imgflip.com/5y7m17.png" />
        <span>{{ pet.pet_name }}</span>
        <span>{{ this.translateWeight(pet.size) }}</span>
      </div>

    </div>
  </div>
</template>
  
<script>
import PetService from "@/service/PetService";
export default {
  data() {
    return {
      pets: [],
      searchQuery:''
    }
  },
  methods: {
    redirectToProfile(petId) {
      this.$router.push(`/pets-adocao/${petId}/perfil`)
    },
    translateWeight(name) {
      switch (name) {
        case 'SMALL': {
          return 'PEQUENO'
        }
        case 'MEDIUM': {
          return 'MÉDIO'
        }
        case 'LARGE': {
          return 'GRANDE'
        }
        case 'EXTRA_LARGE': {
          return 'GIGANTE'
        }
        default: {
          return name
        }
      }
    },
    searchPets() {
      PetService.getAllPets({ name: this.searchQuery })
        .then((data) => {
          this.pets = data
        })
        .catch(() => alert('Houve um erro. Entre em contato com a ONG'))
    }  
  },
  mounted() {
    PetService.getAllPets()
      .then((data) => {
        this.pets = data
      })
      .catch(() => alert('Houve um erro. Entre em contato com a ONG'))
  }
}
</script>
  
  
<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
}

.pet-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin: 0 auto;
}

.pet-item {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding-bottom: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pet-item:hover {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.7);
}

.pet-item img {
  width: 250px;
  border-radius: 12px;
}

.pet-item span {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: #ecb11f;
}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-container input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-container button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #45a049;
}
</style>