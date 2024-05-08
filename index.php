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

        <!-- cards -->
        <div class="flex-items">

            <div>
                <span></span>
                <h2>Total Load</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div>
                <span></span>
                <h2>Solar</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div>
                <span></span>
                <h2>Grid</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div>
                <span></span>
                <h2>Battery</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div>
                <span></span>
                <h2>Battery Charge</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

            <div>
                <span></span>
                <h2>Temperature</h2>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

        </div>



    </section>


</body>

</html>