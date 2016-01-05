using System;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CoffeeDemo.Utils.Extensions
{
    public static class HtmlHelpers
    {
        /// <summary>
        /// Determine if the hyperlink is current, and highlight if so (through css)
        /// </summary>
        /// <param name="html"></param>
        /// <param name="controllers"></param>
        /// <param name="actions"></param>
        /// <param name="cssClass"></param>
        /// <returns></returns>
        public static string LinkSelection(this HtmlHelper html, string controllers = "", string actions = "", string cssClass = "selected-link")
        {
            // Ensure we have no rogue white spaces if we have a string array of actions
            if (actions.Contains(",")) 
                actions = Regex.Replace(actions, @"\s+", "");
            
            // Same for controllers
            if (controllers.Contains(",")) 
                controllers = Regex.Replace(controllers, @"\s+", "");

            ViewContext viewContext = html.ViewContext;
            bool isChildAction = viewContext.Controller.ControllerContext.IsChildAction;

            if (isChildAction)
                viewContext = html.ViewContext.ParentActionViewContext;

            RouteValueDictionary routeValues = viewContext.RouteData.Values;
            string currentAction = routeValues["action"].ToString();
            string currentController = routeValues["controller"].ToString();

            if (string.IsNullOrEmpty(actions))
                actions = currentAction;

            if (string.IsNullOrEmpty(controllers))
                controllers = currentController;

            string[] acceptedActions = actions.Trim().Split(',').Distinct().ToArray();
            string[] acceptedControllers = controllers.Trim().Split(',').Distinct().ToArray();
           

            return acceptedActions.Contains(currentAction) && acceptedControllers.Contains(currentController) ?
                cssClass : string.Empty;
        }

        public static IHtmlString DisplayEnumFor<TModel, TValue>(this HtmlHelper<TModel> html, Expression<Func<TModel, TValue>> ex, Type enumType) where TValue : struct, IConvertible
        {
            var value = (int)ModelMetadata.FromLambdaExpression(ex, html.ViewData).Model;
            string enumValue = Enum.GetName(enumType, value);
            return new HtmlString(html.Encode(enumValue));
        }

        /// <summary>
        /// Returns either yes or no (default values that can be overridden) for true or false 
        /// </summary>
        /// <param name="html"></param>
        /// <param name="boolValue"></param>
        /// <param name="trueOutput"></param>
        /// <param name="falseOutput"></param>
        /// <returns></returns>
        public static MvcHtmlString DisplayYesNoFromBool(this HtmlHelper html, bool boolValue, string trueOutput = "Yes", string falseOutput = "No")
        {
            return new MvcHtmlString(boolValue ? trueOutput : falseOutput);
        }
    }
}
