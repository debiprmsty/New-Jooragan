import {defineStore} from "pinia";
import axios from "axios";

const api = "http://localhost:8000/api/";
const getToken = () => localStorage.getItem('token');

export const jooraganState = defineStore('jooragan',{

    state:()=>({
        products:[],
        educations:[],
        categoryProduct:[],
        categoryEducation:[],
        education:null,
        product:null,
        category_edu:null,
        carts:[],
        totalCarts:0,
        comm:[],
        pakets:[],
        id_user:0,
        id_product:0,
        productOwner:null,
        isLoading:false,
        owner:null
    }),
    getters:{
        countCategory(state) {
            return state.categoryProduct.length;
        },
        countCarts(state) {
            return state.carts.length;
        },
        countTotalCart(state) {
             const total = state.carts.reduce((p,c) => {
                    let subtotal = c.quantity * c.product.price;
                    return p + subtotal;
                },0);
            return total;
        }
    },
    actions: {
        // Auth untuj auth user
        async register(data) {
            const response = await axios.post(api + 'register',data);
            const result = response.data;
            return result;
        },
        async login(data) {
            const response = await axios.post(api + 'login',data);
            const result = response.data;
            return result;
        },
        async logout() {
            const meToken = getToken();
            const headers = { Authorization: `Bearer ${meToken}` };
            try {
                const response = await axios.get(api + 'logout',{headers});
                const result = await response.data;
                return result;   
            } catch (error) {
                console.log(error);
            }
        },
        async validationOwner(productId) {
            const token = getToken();
            const getOwner = await axios.get(api + 'toko/owner', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });

            const prown = await getOwner.data.data[0]?.products;
            this.productOwner = prown;
            if (this.productOwner !== undefined) {
                let check = this.productOwner.filter(dt => dt.id == productId);
                return check.length > 0; // Return true if the product is found, false otherwise
            } else {
                return false; // Handle the case when this.productOwner is null
            }
        },
        async ownerStore() {
            const token = getToken();
            try {
                this.isLoading = true;
                const getOwner = await axios.get(api + 'toko/owner', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                
                const isToko = await getOwner.data.data.length;
                if(isToko > 0) {
                    const response = await getOwner.data.data[0];
                    this.owner = response;
                    this.isLoading = false;
                    this.products = response.products;
                }else {
                    this.owner = null;
                    this.isLoading = false;
                }
                
               
            } catch (error) {
                console.log(error);
            }
        },
        async getActiveUser() {
             const token = getToken();
                if (token) {
                try {
                    const response = await axios.get(api + 'me', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    
                    const activeUser = response.data;
                    this.id_user = activeUser.id;
                } catch (error) {
                    console.log(error);
                }
            } 
        },
        // Carts untuk usecart
        async userCart() {
            const token = getToken();
            if(token) {
                try {
                    const response = await axios.get(api + 'carts/me-cart', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    });
                    this.carts = await response.data.data
                } catch (error) {
                    console.log(error);
                }
            }
        },
        // Products untuk modul product
        async getProducts () {
            try {
                const response = await axios.get(api + 'products');
                const result = await response.data.data;
                this.products = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getProductById(id) {
            try{
                this.isLoading = true;
                const response = await axios.get(api + 'products/' + id);
                const result = await response.data.data;
                this.product = result;
                this.pakets = result.pakets;
                this.comm = result.reviews;
                this.id_product = result.id;
                this.isLoading = false;
            }catch(error) {
                console.log(error);
            }
        },
        async getCategoryProducts() {
            try {
                const response = await axios.get(api + 'category');
                const result = await response.data;
                this.categoryProduct = result
            } catch (error) {
                console.log(error);
            }
        },
        async searchProduct(keyword) {
            try {
                const response = await axios.get(api + 'products/name/' + keyword);
                const result = await response.data.data;
                this.products = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getProductByCategory(index) {
            try {
                const response = await axios.get(api + 'products/category/' + index);
                const result = await response.data.data;
                this.products = result;
            } catch (error) {
                console.log(error);
            }
        },
        productImage(image){
            return api + 'products/images/' + image;
        },
        async addProduct(data) {
            const token = getToken();
            try {
                const response = await axios.post(api + 'carts',data,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const result = await response.data;
                this.userCart();
            } catch (error) {
                console.log(error);
            }
        },

        // Education untuk modul edukasi
        async getEducations() {
            try {
                const response = await axios.get(api + 'education');
                const result = await response.data.data;
                this.educations = result;
            } catch (error) {
                console.log(error);
            }
        },
       
        async getCategoryEducation() {
            try {
                const response = await axios.get(api + 'category-edu');
                const result = await response.data.data;
                this.categoryEducation = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getEducationByCategory(index) {
            try {
                const response = await axios.get(api + 'education/category/' + index);
                const result = await response.data.data;
                this.educations = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getEducationDetail(id) {
            try {
                const response = await axios.get(api + 'education/' + id);
                const result = await response.data;
                this.education = result.data;
                this.category_edu = result.category
            } catch (error) {
                console.log(error);
            }
        },
        educationVideo(video) {
            return api + 'education/video/' + video;
        },
        educationImageCategory(image) {
            return api + 'category-edu/images/' + image
        },
        // Comment
        async addComment(data) {
            const meToken = getToken();
            if (meToken) {
              try {
                const headers = { Authorization: `Bearer ${meToken}` };

                const process = await axios.post(
                  api + "reviews",
                  data,
                  { headers }
                );
                const response = await process.data;
                console.log(response);
                this.getProductById(this.id_product);
              } catch (error) {
                console.log(error);
              }
            } 
        }
    }
});