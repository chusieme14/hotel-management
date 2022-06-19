<template>
    <div>
        <v-container class="grey lighten-5 mb-6" max-height="70vh" style="overflow: auto">
            <v-row no-gutters align="center">
                <v-col
                    v-for="n in 8"
                    :key="n"
                    class="d-flex child-flex"
                    cols="3"
                >
                <v-card class="pa-2 ma-2" outlined tile height="230">
                    <v-card-text>
                        <div>Single Standard</div>
                        <p class="text-h4 text--primary">
                            ROOM 101
                        </p>
                        <p><span><v-icon color="orange darken-4" class="mr-2">mdi-archive-settings</v-icon></span> Available </p>
                        <div class="text--primary">
                            Started 2pm
                        </div>
                    </v-card-text>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
  }
</script>