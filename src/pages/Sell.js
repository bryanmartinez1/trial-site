export default function Sell() {
  return (
    <body>
      <article class="reg">
        {" "}
        <h2>Add Product</h2>
        {/* Product Name */}
        <p>
          <label for="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product Name"
            maxLength="20"
          ></input>
        </p>
        {/* Product Min Bid */}
        <p>
          <label for="productMinBid">Product Price:</label>
          <text> $</text>
          <input
            type="int"
            id="productMinBid"
            placeholder="Enter Product's Min Bid"
            maxLength="20"
          ></input>
        </p>
        {/* Product Image */}
        <p>
          <label for="productImage">Insert Image:</label>
          <input
            type="file"
            id="productImage_input"
            accpet="image/png, image/jpg"
          ></input>
          <div id="display_image"></div>
        </p>
        {/* Product Condition */}
        <p>
          <label for="productCondition">Product Condition:</label>
          <input
            type="text"
            id="productCondition"
            placeholder="Enter Product's Min Bid"
            maxLength="20"
          ></input>
        </p>
        {/* Product Tag */}
        <p>
          <label for="productTag">Select Product Tag:</label>
          <input
            type="text"
            id="productTag"
            placeholder="Enter Product's Min Bid"
            maxLength="20"
          ></input>
        </p>
        <button id="btn1">Confirm</button>
        <p class="output" id="output1"></p>
      </article>

      <script>
        const txt1 = document.getElementById('productName'); const image_inoput
        = document.querySelector(#image_input); var uploaded_image = ""; const
        btn1 = document.getElementById('btn1'); const out1 =
        document.getElementById('output1');
      </script>
    </body>
  );
}
