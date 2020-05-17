<template>
  <div id="app">
    <nav id="mainbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <h111>EMPLOYEE RATING</h111>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/AdminDashboard">Admin dashboard</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/EmployeeCard">Employee List</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="nav-link" to="/Feedback">Feedback</router-link>

            </div>
          </li>
        </ul>

      </div>
    </nav>

    <router-view />

  </div>
</template>

<style lang="scss">
h111 {
  padding: 20px;
  font-size: 20px;
  letter-spacing: 1px;


}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #217feb;
}

#mainbar {
  background-color: #fbc000;
  margin-bottom: 20px;
}

#navbarNavDropdown {
  background-color: #335f7cc5;
}

#nav {

  a {
    font-weight: bold;
    color: #0adf1c;

    &.router-link-exact-active {
      color: #19466b70;
    }
  }
}

</style>
