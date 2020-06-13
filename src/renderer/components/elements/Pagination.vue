<template>
     <ul class="justify-content-end mb-0 pagination">
              <li class="disabled page-item">
                <a href="#pablo" tabindex="-1" class="page-link">
                  <span><</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="active page-item">
                <a href="#pablo" class="page-link">1</a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a href="#pablo" class="page-link">
                  <span>></span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
</template>

<style scoped>

ul.pagination{
    list-style: none;
}

ul.pagination .page-item {
    margin: 5px;
    border-radius: 50%;
    background: #f7fafc;
    width: 40px;
    height: 40px;
    color: black;
    box-shadow: 5px 5px 8px -1px rgba(0, 0, 0, 0.1);
    text-align: center;
}

ul.pagination .page-item a {
    background: none;
    border: none;
}

ul.pagination .page-item.active {
    background: #4d7bca;
    color: white;
    border: none;
}

</style>


<script>
export default {
  name: "Pagination",
  components: {},
  methods: {}
};
</script>