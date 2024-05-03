<script>
import Card from 'primevue/card';

export default {
  name: "RepositoriosView",
  components: {
    Card
  },
  data() {
    return {
      repositories: [],
      staticRepositories: [],
      query: '',
      channels: [],
      loading: false
    };
  },
  methods: {
    searchContent() {
      this.loading = true;
      fetch(`http://localhost:3000/repositories?category=${this.query}`)
          .then(response => response.json())
          .then(data => {
            this.repositories = data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching repositories:', error);
            this.loading = false;
          });
    }
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        this.repositories = [];
      }
    }
  },
  created() {
    fetch('http://localhost:3000/repositories')
        .then(response => response.json())
        .then(data => {
          data.sort(() => Math.random() - 0.5);
          this.staticRepositories = data.slice(0, 3);
        });
    fetch('http://localhost:3000/channels')
        .then(response => response.json())
        .then(data => {
          data.sort(() => Math.random() - 0.5);
          this.channels = data.slice(0, 3);
        });
  }
}
</script>

