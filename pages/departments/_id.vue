<template>
  <div>
    <div class="breadcrumb" v-if="department != null">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/departments">Departments</router-link>
      <router-link
        :to="`/departments/${this.$route.params.id}`"
        class="active"
        >{{ department.name }}</router-link
      >
    </div>

    <v-container fluid>
      <v-progress-circular
        v-if="staffs == null || department == null"
        indeterminate
        size="50"
        color="indigo"
      ></v-progress-circular>
      <v-card class="pa-2" v-else>
        <v-card-title
          ><div>
            <table
              style="width:100%; text-align: start;"
              class="pa-0"
              summary="Patient infos"
              v-if="department != null"
            >
              <tr v-if="department.id">
                <td id="name" class="font-weight-black">
                  Department name: &nbsp;
                </td>
                <td>
                  <small>{{ department.name }}</small>
                </td>
              </tr>
              <tr v-if="department.parent != null">
                <td id="parentname" class="font-weight-black">
                  Child of :&nbsp;
                </td>
                <td>
                  <small>{{ department.parent.name }}</small>
                </td>
              </tr>

              <tr>
                <td id="date" class="font-weight-black">
                  Opening date: &nbsp;
                </td>
                <td>
                  <small>{{ department.openingDate }} </small>
                </td>
              </tr>
              <tr>
                <td id="info" class="font-weight-black">
                  Descriptions: &nbsp;
                </td>
                <td>
                  <small>{{ department.descriptions }} </small>
                </td>
              </tr>
            </table>
          </div>
        </v-card-title>

        <v-card-text>
          <h3><strong>Members:</strong></h3>
          <v-row no-gutters v-if="staffs.length > 0">
            <v-col
              v-for="(staff, n) in staffs"
              :key="n"
              cols="12"
              sm="12"
              md="2"
            >
              <v-card outlined flat class="ma-1" :to="`/staffs/${staff.id}`">
                <v-list-item :key="staff.id">
                  <v-list-item-avatar>
                    <v-img
                      :src="
                        staff.imageUrl == null
                          ? 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Round&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                          : staff.imageUrl
                      "
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      class=" font-weight-medium light-blue--text"
                      v-html="
                        staff.fullName == null ? staff.username : staff.fullName
                      "
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      class="font-italic"
                      v-html="staff.user.roles[0].name.toLowerCase()"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
          <v-alert v-else dense text type="error">
            No staff is assigned in this department
          </v-alert>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import StaffCard from "@/components/staff/staff_card";
import info_card_info from "@/components/profile/c_info_card";
export default {
  components: {
    "card-info": info_card_info,
    StaffCard
  },
  data() {
    return {
      department: null,
      staffs: null
    };
  },

  methods: {
    async fetchdepartmentdata() {
      return await this.$api
        .$get(`departments/${this.$route.params.id}/`)
        .then(response => {
          this.department = response;
        })
        .catch(error => {
          console.log(error);
        });
    },
    async fetchdepartmentstaffs() {
      return await this.$api
        .$get(`staffs/dep/${this.$route.params.id}/`)
        .then(response => {
          this.staffs = response;
        })
        .catch(error => {
          console.log(error);
        });
    },
    reUpdateProfile: function() {
      this.fetchdepartmentdata();
      this.fetchdepartmentstaffs();
    }
  },
  created() {
    this.reUpdateProfile();
  },
  computed: {
    username() {
      return this.department == null ? "" : this.department.name;
    }
  }
};
</script>
