<template>
  <div class="p-grid p-fluid dashboard">
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Users</span>
        <span class="detail">Number of visitors</span>
        <span class="count visitors">12</span>
      </div>
    </div>
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Sales</span>
        <span class="detail">Number of purchases</span>
        <span class="count purchases">534</span>
      </div>
    </div>
    <div class="p-col-12 p-lg-4">
      <div class="card summary">
        <span class="title">Revenue</span>
        <span class="detail">Income for today</span>
        <span class="count revenue">$3,200</span>
      </div>
    </div>

    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #007be5; color: #00448f">
          <span>TV</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-search"></i>
          <span>Total Queries</span>
          <span class="count">523</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #ef6262; color: #a83d3b">
          <span>TI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-question-circle"></i>
          <span>Total Issues</span>
          <span class="count">81</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #20d077; color: #038d4a">
          <span>OI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-filter"></i>
          <span>Open Issues</span>
          <span class="count">21</span>
        </div>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-xl-3">
      <div class="highlight-box">
        <div class="initials" style="background-color: #f9c851; color: #b58c2b">
          <span>CI</span>
        </div>
        <div class="highlight-details">
          <i class="pi pi-check"></i>
          <span>Closed Issues</span>
          <span class="count">60</span>
        </div>
      </div>
    </div>

    <div class="p-col-12 p-md-6 p-lg-4">
      <Panel header="Tasks" style="height: 100%">
        <ul class="task-list">
          
        </ul>
      </Panel>
    </div>

    <div class="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
      <Panel header="Contact Us">
        <div class="p-grid">
          <div class="p-col-12">
            <Dropdown/>
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Name" />
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Age" />
          </div>
          <div class="p-col-12">
            <InputText type="text" placeholder="Message" />
          </div>
          <div class="p-col-12">
            <Button type="button" label="Send" icon="pi pi-envelope" />
          </div>
        </div>
      </Panel>
    </div>

    <!-- <div class="p-col-12 p-lg-4 contacts">
      <Panel header="Contacts">
        <ul>
          <li>
            <button class="p-link">
              <span class="name">Claire Williams</span>
              <span class="email">clare@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Jason Dourne</span>
              <span class="email">jason@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Jane Davidson</span>
              <span class="email">jane@primevue.com</span>
            </button>
          </li>
          <li>
            <button class="p-link">
              <span class="name">Tony Corleone</span>
              <span class="email">tony@primevue.com</span>
            </button>
          </li>
        </ul>
      </Panel>
    </div> -->

    <div class="p-col-12 p-lg-4">
      <Panel header="Activity" style="height: 100%">
        <div class="activity-header">
          <div class="p-grid">
            <div class="p-col-6">
              <span style="font-weight: bold">Last Activity</span>
              <p>Updated 1 minute ago</p>
            </div>
            <div class="p-col-6" style="text-align: right">
              <Button label="Refresh" icon="pi pi-refresh" />
            </div>
          </div>
        </div>

        <ul class="activity-list">
          <li>
            <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
              <h5 class="activity p-m-0">Income</h5>
              <div class="count">$900</div>
            </div>
            <ProgressBar :value="95" :showValue="false" />
          </li>
          <li>
            <div class="p-d-flex p-jc-between p-ai-center p-mb-3">
              <h5 class="activity p-m-0">Tax</h5>
              <div class="count" style="background-color: #f9c851">$250</div>
            </div>
            <ProgressBar :value="24" :showValue="false" />
          </li>
        </ul>
      </Panel>
    </div>

    <div class="p-col-12 p-lg-6">
      <div class="card">
        <h1 style="font-size: 16px">Recent Sales</h1>
        <DataTable>
          <Column>
            <template #header> Logo </template>
            <template #body="slotProps">
              <img
                :src="'assets/layout/images/product/' + slotProps.data.image"
                :alt="slotProps.data.image"
                width="50"
              />
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true"></Column>
          <Column field="category" header="Category" :sortable="true"></Column>
          <Column field="price" header="Price" :sortable="true">
           
          </Column>
          <Column>
            <template #header> View </template>
            <template #body>
              <Button
                icon="pi pi-search"
                type="button"
                class="p-button-success p-mr-2 p-mb-1"
              ></Button>
              <Button
                icon="pi pi-times"
                type="button"
                class="p-button-danger p-mb-1"
              ></Button>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <div class="p-col-12 p-lg-6">
      <div class="card">
        
      </div>
    </div>
  </div>
</template>


