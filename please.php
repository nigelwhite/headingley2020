<?php

$msg = '';

// if honeypot not empty, show a success alert and exit
	// if honeypot empty, process POST data
		// if chatAction not 'none'
			// if chatAction = subscribe or unsubscribe, send simple email
			// if chatAction = change email address, send old address
			// if chatAction = other, send details
		// if triangleActio not 'none'
			// triangle email
		// if activistsAction not 'none'
			// activists email
		// show success alert
		
		



if(isset($_POST['fname'])){
// print_r($_POST);
// echo "<br />";
// sanitise
$fname = htmlspecialchars($_POST['fname']);
$lname = htmlspecialchars($_POST['lname']);
echo $fname.' '.$lname;
echo "<br />";
$email = htmlspecialchars($_POST['email']);
echo $email;
echo "<br />";
$oldEmail = htmlspecialchars($_POST['oldEmail']);
echo $oldEmail;
echo "<br />";
// chat stuff
$chatAction = htmlspecialchars($_POST['chatAction']);
echo $chatAction;
echo "<br />";
$chatDetails = htmlspecialchars($_POST['chatDetails']);
echo $chatDetails;
// show success message
$msg = 'Thanks a bunch';

}



?>

<!DOCTYPE html>
<html>
	<head>
		<title>Title</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link type="text/css" rel="stylesheet" href="css/uikit.css" />
		<link type="text/css" rel="stylesheet" href="css/mycss.css" />
		<link type="text/css" rel="stylesheet" href="css/form.css" />
		<script
			src="https://code.jquery.com/jquery-3.5.1.min.js"
			integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			crossorigin="anonymous"
		></script>
		<script src="js/uikit.min.js"></script>
		<script defer type="text/javascript" src="please.js"></script>
	</head>
	<body>
		<div
			class="uk-container uk-padding-remove uk-container-center uk-panel uk-panel-box site-my"
		>
			<!-- Top Navigation -->
			<nav class="uk-navbar">
				<div class="uk-flex uk-flex-middle uk-flex-space-between">
					<div>
						<a href="index.html"
							><img
								src="img/logo-nav.png"
								class="logo-nav-my"
								alt="people working together"
						/></a>
					</div>
					<div class="navbar-brand-my">
						<a href="index.html">headingley.org</a>
					</div>
					<div>
						<ul
							class="uk-navbar-nav uk-hidden-small navbar-my uk-flex uk-flex-middle"
						>
							<li>
								<a href="index.html">Welcome</a>
							</li>
							<li class="uk-active">
								<a href="about.html">About</a>
							</li>
						</ul>

						<a
							href="#my-id"
							class="uk-navbar-toggle uk-visible-small"
							data-uk-offcanvas
						></a>
					</div>
				</div>
			</nav>

			<!-- Main section -->
			<main
				class="uk-margin uk-margin-left uk-margin-right site-content-my"
			>
				<div class="uk-margin-top notindex-content-my">
					<h2 class="uk-text-center">
						Subscribe or change your settings
					</h2>
					<p class="uk-margin-large-top">
						Headingley residents: please subscribe below.
					</p>
					<p>
						If you are already subscribed, you can manage your
						settings yourself. If that is too daunting, you
						can request a volunteer to do it for you below. Please
						help our administrators by giving clear instructions.
					</p>
					<p>See our Privacy Policy for how we use the data.</p>
					<form
						name="please"
						id="please"
						class="uk-form"
						method="POST"
						action="<?php echo $_SERVER['PHP_SELF']; ?>"
					>
						<!-- My details -->
						<div class="uk-panel uk-panel-box panel-my">
							<h4 class="uk-panel-title">My details</h4>

							<div class="uk-grid">
								<div class="uk-width-medium-1-2">
									<div class="uk-form-row">
										<label
											class="uk-form-label uk-text-small"
											for="fname"
											>First name</label
										>
										<input
											type="text"
											class="uk-width-1-1"
											id="fname"
											name="fname"
										/>
									</div>
									<div class="uk-form-row">
										<label
											class="uk-form-label uk-text-small"
											for="lname"
											>Last name</label
										>
										<input
											type="text"
											class="uk-width-1-1"
											id="lname"
											name="lname"
										/>
									</div>
								</div>
								<div class="uk-width-medium-1-2">
									<div
										class="uk-form-row margin-top-small-my"
									>
										<label
											class="uk-form-label uk-text-small"
											for="email"
											>Current email</label
										>
										<input
											type="email"
											class="uk-width-1-1"
											id="email"
											name="email"
										/>
									</div>
									<div class="uk-form-row" id="oldEmailDiv">
										<label
											class="uk-form-label uk-text-small"
											for="oldEmail"
											>Old email</label
										>
										<input
											type="email"
											class="uk-width-1-1"
											id="oldEmail"
											name="oldEmail"
										/>
									</div>
								</div>
							</div>
						</div>

						<!-- Chat -->
						<div class="uk-panel uk-panel-box panel-my">
							<h4
								class="uk-panel-title chat-color panel-title-my"
							>
								Chat email network
								<span class="uk-text-small"
									>for fun and everyday stuff</span
								>
							</h4>

							<div class="uk-grid">
								<div class="uk-width-large-1-3">
									<div
										class="uk-form-controls uk-form-controls-text"
									>
										<input
											type="radio"
											id="subscribeChat"
											name="chatAction"
											value="subscribe Chat"
										/>
										<label for="subscribeChat"
											>subscribe me</label
										>
										<br />

										<input
											type="radio"
											id="unsubscribeChat"
											name="chatAction"
											value="unsubscribe Chat"
										/>
										<label for="unsubscribeChat"
											>unsubscribe me</label
										>
										<br />
										<input
											type="radio"
											id="changeEmailChat"
											name="chatAction"
											value="change email Chat"
										/>
										<label for="changeEmailChat"
											>change my email</label
										>
										<br />
										<input
											type="radio"
											id="otherChat"
											name="chatAction"
											value="other Chat"
										/>
										<label for="otherChat">other</label
										><br />
										<input
											type="radio"
											id="noneChat"
											name="chatAction"
											value="no action"
											checked="checked"
										/>
										<label for="noneChat"
											>take no action</label
										>
									</div>
								</div>
								<!-- for conditional display of extra fields -->
								<div
									class="uk-width-large-2-3 margin-top-small-my"
								>
									<textarea
										name="chatDetails"
										class="uk-width-1-1"
										id="chatDetails"
										cols="30"
										rows="5"
										placeholder="Details of what you want us to do in your Chat settings"
									></textarea>
									<div id="chatEmails">
										<fieldset
											data-uk-margin
											class="uk-form-horizontal margin-top-small-my"
										>
											<div class="uk-form-row">
												<label
													class="uk-form-label uk-text-small uk-width-1-3"
													for="nowMailChat"
													>Current email (as
													above)</label
												>
												<input
													class="uk-width-2-3"
													type="email"
													id="nowMailChat"
													name="nowMmailChat"
													disabled
												/>
											</div>
											<div class="uk-form-row">
												<label
													class="uk-form-label uk-text-small uk-width-1-3"
													for="oldMailChat"
													>Old email (please add
													above)</label
												>
												<input
													class="uk-width-2-3"
													type="email"
													id="oldEmailChat"
													name="oldEmailChat"
													disabled
												/>
											</div>
										</fieldset>
									</div>
								</div>
							</div>
						</div>

						<!-- Triangle -->

						<!-- Activists -->

						<div
							id="error"
							class="uk-alert uk-alert-danger alert-my"
						></div>
						<?php if($msg != ''): ?>
						<div class="uk-alert uk-alert-success">
							<?php echo $msg; ?>
						</div>
						<?php endif; ?>
						<button class="uk-button uk-button-primary" type="submit" value="Submit" name="submit">Send</button>
						<button class="uk-button uk-button-primary" type="reset">Reset form</button>
						<button class="uk-button uk-button-primary" type="button" id="test">Test</button>
					</form>
				</div>
			</main>

			<!-- Footer section -->
			<footer class="uk-text-center footer-my">
				<p class="uk-margin-top uk-margin-bottom">
					Funded by Headingley Network
				</p>
			</footer>

			<!-- Drawer navigation -->
			<div id="my-id" class="uk-offcanvas">
				<div class="uk-offcanvas-bar">
					<ul class="uk-nav uk-nav-offcanvas">
						<li class="uk-active">
							<a href="index.html">Welcome</a>
						</li>
						<li><a href="about.html">About</a></li>
					</ul>
				</div>
			</div>
		</div>
	</body>
	>
</html>