<template>
  <div class="user-home">
    <Sidebar
      class="animate__animated animate__fadeInLeft"
      :user="user"
      v-show="sidebarStatus"
      @closeSidebar="toggleSidebar"
    />
    <div
      class="sidebar-toggle btn bg-blue"
      @click="toggleSidebar"
      v-show="!sidebarStatus"
    >
      <i class="fas fa-bars fa-lg"></i>
    </div>
    <div class="text-center md-cont mt-sm n-row data">
      <img
        :src="user.photoURL"
        alt="profile img"
        loading="lazy"
        class="img-rounded mb-xs"
        width="170"
        height="170"
      />
      <h3 class="text-primary mb-lg color-blue">{{ user.displayName }}</h3>
      <div class="actions n-row">
        <div v-show="false">
          <input
            type="file"
            name="image"
            id="image"
            ref="file_upload"
            @change="searchImage($event)"
          />
        </div>
        <div class="mb-sm">
          <button class="btn bg-primary" @click="$refs.file_upload.click()">
            Search image</button
          >&nbsp;
          <button
            class="btn bg-primary"
            :disabled="image === null"
            @click="uploadImage"
          >
            Upload image
          </button>
        </div>
        <div v-show="infoPanel" class="panel panel-success mx-auto">
          {{ textPanel }}
        </div>
        <div v-show="errorPanel" class="panel panel-error mx-auto">
          {{ textPanel }}
        </div>
        <img
          v-show="urlTemporal && !infoPanel && !errorPanel"
          :src="urlTemporal"
          alt="avatar"
          loading="lazy"
          class="img-responsive preview-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import Sidebar from "@/components/Sidebar";
import { uploadFile } from "@/app/service/storageService";
import { updateUser } from "@/app/service/userService";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore();
    const sidebarStatus = ref(false);
    const image = ref(null);
    const urlTemporal = ref(null);
    const infoPanel = ref(false);
    const errorPanel = ref(false);
    const textPanel = ref(null);
    const isValidImage = (type) =>
      type === "image/jpeg" || type === "image/png";

    const user = computed(() => {
      const user = store.getters.getCurrentUser;
      return user;
    });

    function toggleSidebar() {
      sidebarStatus.value = !sidebarStatus.value;
    }

    function searchImage(event) {
      image.value = event.target.files[0];
      const type = image.value.type;
      infoPanel.value = false;
      errorPanel.value = false;
      if (!isValidImage(type)) {
        errorPanel.value = true;
        textPanel.value = "The file type is not valid";
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        urlTemporal.value = e.target.result;
      };
      reader.readAsDataURL(image.value);
    }

    function uploadImage() {
      const type = image.value.type;
      if (isValidImage(type)) {
        uploadFile(`${user.value.email}/avatar`, image.value).then((res) => {
          updateUser({ ...user.value, photoURL: res });
          user.value.photoURL = res;
          infoPanel.value = true;
          textPanel.value = "The image has been upload succesfully";
        });
      }
    }

    return {
      user,
      toggleSidebar,
      sidebarStatus,
      searchImage,
      image,
      urlTemporal,
      uploadImage,
      infoPanel,
      textPanel,
      errorPanel,
    };
  },
};
</script>

<style scoped>
.sidebar-toggle {
  color: white;
  position: fixed;
  border-radius: 0 4px 4px 0;
}

.actions {
  border-radius: 0.25rem;
  background-color: whitesmoke;
}

.panel {
  width: 95%;
}
</style>
