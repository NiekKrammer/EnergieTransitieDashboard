<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Energie Transitie Dashboard</title>
</head>

<body>
    <section class="dashboard">

        <nav>
            <span></span>
            <img src="imgs/power-icon.png">
            <h1>Power Generation</h1>
            <div class="dropdown">
                <button class="dropbtn"><i class="fa-solid fa-clock"></i> 24 hours</button>
                <div class="dropdown-content">
                    <a href="#">1 week</a>
                    <a href="#">1 month</a>
                    <a href="#">3 months</a>
                </div>
            </div>
            <button class="dropbtn"><i class="fa-solid fa-share"></i> Share</button>
        </nav>

        <!-- cards top -->
        <div class="flex-section-top">

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Total Load</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Solar</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Grid</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Battery</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Battery Charge</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

            <div class="card" draggable="true">
                <span class="green_dot"></span>
                <h2>Temperature</h2>
                <div class="dropdown-menu-card">
                    <p>Data types</p>
                    <button>data type 1</button>
                    <button>data type 2</button>
                    <button>data type 3</button>
                    <button>data type 4</button>
                </div>
                <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
            </div>

        </div>

        <!-- cards bottom -->
        <div class="flex-section-bottom">

            <div class="big-graph">
                <div class="flex-items-card" draggable="true">
                    <h2>Solar Generation + UV Forecast</h2>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
                </div>
            </div>

            <div class="col-cards">

                <div class="battery-charge">
                    <div class="flex-items-card">
                        <h2>Solar Generation + UV Forecast</h2>
                        <div class="dropdown-menu-card">
                            <p>Data types</p>
                            <button>data type 1</button>
                            <button>data type 2</button>
                            <button>data type 3</button>
                            <button>data type 4</button>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
                    </div>
                </div>
                <div class="temperature">
                    <div class="flex-items-card">
                        <h2>Solar Generation + UV Forecast</h2>
                        <div class="dropdown-menu-card">
                            <p>Data types</p>
                            <button>data type 1</button>
                            <button>data type 2</button>
                            <button>data type 3</button>
                            <button>data type 4</button>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical dropdown-icon"></i>
                    </div>
                </div>

            </div>
        </div>


    </section>

    <script src="script.js"></script>
</body>

</html>