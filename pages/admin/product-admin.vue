<template>
  <div>
    <div class="container">
        <b-table striped hover :items="items" :fields="fields" style="text-align: center;">
    
        <template #cell(picture)="data">
            <img
                :src ="data.item.picture"
                alt="Porto Logo"
                style="height: auto; width: 50px;"
			/>
        </template>

        <template #cell(productNumber)="data">
           {{ data.item.productNumber }}
        </template>
       
        <template #cell(status)="data">
            <label class="switch">
                <input type="checkbox" 
                v-model="data.item.status"
                @click="toggleCheckbox(data.item.status)">
                <div class="slider round"></div>
            </label>
        </template>

        <template #cell(icon)>
            <div class="d-flex justify-content-between">
            <div>
                <i class="bi bi-pencil-square" style="font-size: 20px; cursor: pointer;" @click="iconClickHandler(data.item.status)"></i>
            </div>
            <div>
                <i class="bi bi-trash3" style="font-size: 20px; cursor: pointer;" @click="iconClickHandler(data.item.status)"></i>
            </div>
        </div>
        </template>

        </b-table>
        
        <div>
          <b-row>
            <b-col
              cols="6"
              sm="6"
              class="d-flex align-items-center justify-content-between"
            >
              <span class="text-muted"
                >แสดง
                <!-- {{ dataMeta.from }} -->
                <v-select
                  class="per-page-selector d-inline-block ml-50 mr-1"
                />
                <!-- of  -->
                จาก
                1
                รายการ
              </span>

               <!-- Pagination -->
                <b-pagination
                class=" mb-0 mt-1 mt-sm-0"
              >
                <template #prev-text>
                  <feather-icon icon="ChevronLeftIcon" size="18" />
                </template>
                <template #next-text>
                  <feather-icon icon="ChevronRightIcon" size="18" />
                </template>
              </b-pagination>
            </b-col>
          </b-row>
        </div>
    </div>
  </div>
</template>
<script>
import {
  BTable,BPagination,BFormCheckbox
} from 'bootstrap-vue'
export default {

    layout: 'default-admin',
    components: {
        BTable,
        BPagination,
        BFormCheckbox
    },
    data() {
      return {
        fields: [
                { key: 'index', label: 'ลำดับ' },
                { key: 'picture', label: 'ภาพ' },
                { key: 'productNumber',label: 'รหัสสินค้า' },
                { key: 'name',label: 'ชื่อ' },
                { key: 'status',label: 'สถานะ' },
                { key: 'icon',label: '' },
                ],
        items: [
          { index: 1, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 2, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 3, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: false },
          { index: 4, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 5, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 6, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 7, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true },
          { index: 8, picture: 'https://th-live-01.slatic.net/p/c8d3cdf70a58539d2d928d402f3e66f8.jpg', productNumber: '1002023001', name: 'HOLIS by SCGP IM-MU Cap ผลิตภัณฑ์เสริมอาหาร อิม-มู แคป 1 กล่อง', status: true }
        ]
      }
    },
    methods: {
        toggleCheckbox(isActive) {
            isActive = !isActive
        this.$emit('setCheckboxVal', isActive)
        },

        iconClickHandler(item) {
        console.log('Icon clicked for item:', item);
        },
  }

};

</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #28a745;
}

input:focus + .slider {
  box-shadow: 0 0 1px #28a745;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>