<?php
require_once "../includes/config.php";
if(!isset($_SESSION['admin_id']) && !isset($_SESSION['admin_pwd'])){
	$allClasses->forRedirect("index.php");
}

if($_POST['butSubmit'] == "Submit"){
	
		$query = "insert into tbl_sjobs(inc_cat_id,prod_title,prod_desc,dt_created) values('".$_POST['txtCategory']."','".$_POST['txtTitle']."','".base64_encode($_POST['txtDesc'])."',current_date())";
		$queryc = "update tbl_sjobs set scat=1 where inc_prod_id='".$_POST['cmbProductCat']."'";
		$resc=mysql_query($queryc) or die(mysql_error());
		$retUrl = $_SERVER['PHP_SELF'];
	}
	if($query != ""){
		$result = mysql_query($query) or die(mysql_error());
		$error = mysql_error();
		if($error == ""){
			$stat = "SUCCESS";
		}else{
			$stat = "FAIL";
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <meta charset="utf-8">
  
 
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>AdminLTE 2 | Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.5 -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="plugins/iCheck/flat/blue.css">
  <!-- Morris chart -->
  <link rel="stylesheet" href="plugins/morris/morris.css">
  <!-- jvectormap -->
  <link rel="stylesheet" href="plugins/jvectormap/jquery-jvectormap-1.2.2.css">
  <!-- Date Picker -->
  <link rel="stylesheet" href="plugins/datepicker/datepicker3.css">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker-bs3.css">
  <!-- bootstrap wysihtml5 - text editor -->
  <link rel="stylesheet" href="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i class="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Developers
                        <small><i class="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="dist/img/user3-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Sales Department
                        <small><i class="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="dist/img/user4-128x128.jpg" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        Reviewers
                        <small><i class="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">10</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">9</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 9 tasks</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                        Create a nice theme
                        <small class="pull-right">40%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                        Some task I need to do
                        <small class="pull-right">60%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li><!-- Task item -->
                    <a href="#">
                      <h3>
                        Make beautiful transitions
                        <small class="pull-right">80%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">admin</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  admin - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="logout.php" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
   <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>admin</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Contacts</span> <i class="fa fa-angle-left pull-right"></i>
          </a>
          <ul class="treeview-menu">
           <li><a href="pages/tables/data.php"><i class="fa fa-circle-o"></i> Quick conctacted users</a></li>
          <li><a href="pages/tables/data1.php"><i class="fa fa-circle-o"></i> Contacted Users</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-files-o"></i>
            <span>States</span>
            <span class="label label-primary pull-right">4</span>
          </a>
          <ul class="treeview-menu">
            
		  <li><a href="addstates.php"><i class="fa fa-circle-o"></i> Add States</a></li>
          <li><a href="viewstates.php"><i class="fa fa-circle-o"></i> Edit States</a></li>
          </ul>
        </li>
       
        <li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Jobs</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <ul class="treeview-menu">
             <li><a href="addbranches.php"><i class="fa fa-circle-o"></i> Add Jobs</a></li>
          <li><a href="viewbranches.php"><i class="fa fa-circle-o"></i> Edit Brancghes</a></li>
          </ul>
        </li>
		<li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Add  Jobs</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <ul class="treeview-menu">
             <li><a href="addjobs.php"><i class="fa fa-circle-o"></i> Add Jobs</a></li>
          <li><a href="viewjobs.php"><i class="fa fa-circle-o"></i> Edit/View Jobs</a></li>
<li><a href="changepassword.php"><i class="fa fa-circle-o"></i> Edit Passowrd</a></li> </ul>
        </li>
		<li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Add Sub Jobs</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <ul class="treeview-menu">
             <li><a href="addsjobs.php"><i class="fa fa-circle-o"></i> Add Jobs</a></li>
          <li><a href="viewsjobs.php"><i class="fa fa-circle-o"></i> Edit/View Jobs</a></li>

        </li>
       
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
   <section class="content">
  	   <div class="content-wrapper">
	  <div class="box-body">

<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">

  <tr>
    <td height="150" align="left" valign="top" class="adminBGMiddle">
    
<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
  <tr>
    <td align="left" valign="middle"></td>
  </tr>
  
  <tr height="10">
    <td></td>
  </tr>
  <tr>
    <td height="200" align="center" valign="middle">
    <table width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="border">
  <tr>
    <td align="left" valign="middle" height="10"></td>
  </tr>
  <tr>
    <td align="left" valign="middle" class="subheading" style="padding-left:15px"><?php
if($_REQUEST['act']=="edit"){
	echo 'Edit Products:';
}else{
	echo 'Add Products:';
}  
?>  
	</td>
  </tr>
  
  <tr>
    <td align="left" valign="middle">
<?php
if($stat != ""){

?>    
 <table width="80%" border="0" align="center" cellpadding="0" cellspacing="6">
<?php
	if($stat == "SUCCESS"){     
?>	
	<tr>
    	<td width="22%" align="center" valign="middle" class="successMsg">Jobs has been inserted successfully.</td>
	</tr>
<?php
	}

	if($stat == "FAIL"){    
?>	
	<tr>
	  <td align="center" valign="middle" class="redtext2">Error: Unable to Upload Jobs. Please try again.</td>
	</tr>
<?php
	}
?>	    
	<tr>
	  <td align="center" valign="middle" class="text1">&nbsp;</td>
	  </tr>
	
</table>    
<?php
}else{
?>
<script language="javascript" type="text/javascript">
function validate1(){
	var title=document.frmProducts.txtTitle.value;
    var image=document.frmProducts.txtImage.value;
	 
	if(trim(title) == ""){
		alert("Product Title should not be empty.");
		document.frmProducts.txtTitle.value = '';
		document.frmProducts.txtTitle.focus();
		return false;
	}
	document.frmProducts.txtTitle.value = trim(title);	
	
	if(image != ""){
	
		newsimg = document.frmProducts.txtImage.value;
		var lpos = newsimg.lastIndexOf('.');
		ext = newsimg.substr(lpos+1);
		ext = ext.toLowerCase();
		if(ext != "jpeg" && ext !='gif' && ext !='png' && ext !='jpg'){
			alert("Please select a jpeg or jpg or gif or png image.");
			document.frmProducts.txtImage.focus();
			return false;
		}
	}
	return true;
}

</script>    

<form action="" method="post" enctype="multipart/form-data" name="frmProducts" onSubmit="return validate1()">    

    <table width="90%" border="0" align="center" cellpadding="0" cellspacing="6">
      <?php /*?><tr>
        <td width="26%" align="left" valign="middle" class="bold_txt">Category</td>
        <td width="74%" align="left" valign="middle">
        <select name="cmbProductCat" class="forTextfield" id="cmbProductCat" >
      <option value="" selected="selected">--Select--</option>
      <?php
$query1 = "select * from tbl_projects where inc_cat_id='0' order by prod_title asc";
$result1 = mysql_query($query1);
while($row1 = mysql_fetch_assoc($result1)){
		$selected = '';
		if($row1['inc_prod_id'] == $_REQUEST['cat_id']){
			$selected = ' selected="selected"';
		}
		
		echo '<option value="'.$row1['inc_prod_id'].'"'.$selected.'>'.$row1['prod_title'].'</option>';
	}
?>
    </select>
        </td>
      </tr><?php */?>
     
      <tr>
        <td width="26%" align="right" valign="middle" class="bold_txt">Job  Title </td>
        <td width="74%" align="left" valign="middle"><input name="txtTitle" type="text" class=""  id="txtTitle" value="" ></td>
      </tr>
     
	 
	  <tr>
        <td align="right" valign="middle" class="bold_txt">Select State</td>
        <td align="left" valign="middle">
		<select name="txtCategory">
		<?php
		$query1 = "select * from tbl_jobs";
		$result1 = mysql_query($query1);
		while($row1 = mysql_fetch_assoc($result1)){ ?>
		
		  <option value="<?php echo $row1['inc_cat_id']; ?>"><?php echo $row1['cat_name']; ?></option>
		  <?php } ?>
		</select>
		</td>
      </tr>
	  <?php /*?><tr>
        <td width="22%" align="left" valign="middle" class="bold_txt">Description</td>
		<td width="78%" align="left" valign="middle">
          
		  <textarea name="txtSDesc"  class="forTextfield" id="txtSDesc" cols="40" rows="3"><?=$scontent?></textarea></td>
      </tr><?php */?>
	   <tr>
        <td width="22%" align="right" valign="middle" class="bold_txt">Description</td>
		<td width="78%" align="left" valign="middle">
        <textarea name="txtDesc"  class="forTextfield" id="txtDesc" style="width:90%;height:165px;"></textarea>
		 <script src="../editor/nicEdit.js" type="text/javascript"></script>
		<script>
		var area1, area2;
		
		function toggleArea1() {
			if(!area1) {
				area1 = new nicEditor({fullPanel : true}).panelInstance('txtDesc',{hasPanel : true});
			} else {
				area1.removeInstance('txtDesc');
				area1 = null;
			}
		}
		
		bkLib.onDomLoaded(function() { toggleArea1(); });
		</script>
		</td>
      </tr>
      
      <tr>
        <td height="1" colspan="2" align="left" valign="middle"></td>
        </tr>
      <tr>
        <td align="left" valign="middle" class="text1">&nbsp;</td>
        <td align="left" valign="middle"><input name="butSubmit" type="submit" class="forButton" id="butSubmit" value="Submit"></td>
      </tr>
    </table>
</form> 
<?php
}
?>   
    </td>
  </tr>
  
</table>
    </td>
  </tr>
  <tr>
    <td align="left" valign="middle" height="5"></td>
  </tr>
  
</table>
    
    
    </td>
  </tr>
  <tr>
    <td height="9" align="left" valign="top" class="adminBGBottom"></td>
  </tr>
</table>
</div>
</div>
        </section>
</div>
<script src="plugins/jQuery/jQuery-2.1.4.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.5 -->
<script src="bootstrap/js/bootstrap.min.js"></script>
<!-- Morris.js charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="plugins/morris/morris.min.js"></script>
<!-- Sparkline -->
<script src="plugins/sparkline/jquery.sparkline.min.js"></script>
<!-- jvectormap -->
<script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
<!-- jQuery Knob Chart -->
<script src="plugins/knob/jquery.knob.js"></script>
<!-- daterangepicker -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
<script src="plugins/daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="plugins/datepicker/bootstrap-datepicker.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/app.min.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
</body>
</html>
